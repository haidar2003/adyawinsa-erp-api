// controllers/shipmentDraft.controller.ts

import { NextFunction } from 'express';
import { Request, Response } from 'express-serve-static-core';
import { body, validationResult } from 'express-validator';
import * as shipmentDraftService from '../service/shipmentDraft.service';
import axios from 'axios';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

const endpointApiUrl = process.env.ENDPOINT_ERP_API_URL ?? 'https://server.tricentrumfortuna.com:12';

// Validation rules
export const shipmentDraftCreateValidationRules = [
	body('creation_date_time').isISO8601().toDate().withMessage('Creation date time in ISO 8601 format is required.'),
	body('data').isObject().withMessage('Data must be a valid JSON object'),
];

export const shipmentDraftUpdateValidationRules = [
	body('data').isObject().withMessage('Data must be a valid JSON object'),
];

// Controllers
export const createShipmentDraft = async (req: Request, res: Response, next: NextFunction) => {
    
	const imDraft = req.body.imDraft;

	try {

		const hydratedShipmentDraft = hydrateShipment(imDraft);
		const hydratedShipmentDraftErp = getShipmentErpObjectFromHydratedCombinedData(hydratedShipmentDraft);

		const reqBody = {
			method: 'post',
			maxBodyLength: Infinity,
			headers: { 
				'Content-Type': 'application/json'
			},
			url: 'https://6v3itlqgyj.execute-api.ap-southeast-1.amazonaws.com/prod/erp-forwarder',
			data: JSON.stringify({
				'axiosConfig': {
					'method': 'post',
					'url': endpointApiUrl + '/api/v1/models/M_InOut',
					'data': hydratedShipmentDraftErp,
				}
			})
		};
	
		const response = await axios(reqBody);

		console.log(response);

		const shadowData = {
			...response.data.returnBody,
			employeeNumber: hydratedShipmentDraft.employeeNumber,
			materialMovementProductDict: hydratedShipmentDraft.materialMovementProductDict,
			M_Locator_ID: hydratedShipmentDraft.M_Locator_ID,
			M_LocatorTo_ID: hydratedShipmentDraft.M_LocatorTo_ID
		};

		const draftData = {
			org_id: shadowData.AD_Org_ID.id,
			creation_date_time: new Date(shadowData.Created),
			movement_id: shadowData.id,
			data: shadowData
		};

		const result = await shipmentDraftService.createShipmentDraft(draftData);
		
		res.status(response.status).json(result); 
	} catch (error) {
		console.log('Error in createShipmentDraft controller: ', error);
		next(error);
	}
};

export const getShipmentDraft = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;

		const movementId = parseInt(id as string, 10);
		if (isNaN(movementId)) {
			return res.status(400).json({ error: 'Invalid movement ID' });
		}

		// Ambil dari Supabase
		const shadowDraft = await shipmentDraftService.getShipmentDraftByMovementId(movementId);

		if (!shadowDraft) {
			return res.status(404).json({ error: 'Shipment not found in shadow database' });
		}

		// Ambil dari server asli
		let realDraft: any = null;
		try {
			const reqBody = {
				method: 'post',
				maxBodyLength: Infinity,
				headers: {
					'Content-Type': 'application/json'
				},
				url: 'https://6v3itlqgyj.execute-api.ap-southeast-1.amazonaws.com/prod/erp-forwarder',
				data: JSON.stringify({
					'axiosConfig': {
						'method': 'get',
						'url': `${endpointApiUrl}/api/v1/models/M_InOut/${movementId}`,
						'params': {
							'$orderby': 'Created desc',
							'$expand': 'M_InOutLine',
						}
					}
				})
			};

			const response = await axios(reqBody);
			realDraft = response.data.returnBody;
		} catch (error: any) {
			console.error('Failed to fetch from real server:', error);
			return res.status(500).json({ error: 'Failed to fetch data from real server'});
		}

		// Bandingkan untuk mendapat daftar ketidakkonsistenan
		const enrichedDraft = {
			...(shadowDraft.data as any),
			status: checkConsistencyStatus(shadowDraft, realDraft)
		};

		// Kirim response
		return res.json(enrichedDraft);
        
	} catch (error: any) {
		console.error('Unexpected server error:', error);
		next(error);
	}
};

export const getShipmentDraftAll = async (req: Request, res: Response, next: NextFunction) => {
	try {
		let realDraftsList: any[] = [];
		let shadowDraftsList: any[] = [];

		// Ambil dari server asli
		try {
			const reqBody = {
				method: 'post',
				maxBodyLength: Infinity,
				headers: {
					'Content-Type': 'application/json'
				},
				url: 'https://6v3itlqgyj.execute-api.ap-southeast-1.amazonaws.com/prod/erp-forwarder',
				data: JSON.stringify({
					'axiosConfig': {
						'method': 'get',
						'url': `${endpointApiUrl}/api/v1/models/M_InOut`,
						'params': {
							'$orderby': 'Created desc',
							'$expand': 'M_InOutLine',
						}
					}
				})
			};

			const response = await axios(reqBody);
			realDraftsList = response.data.returnBody.records;
		} catch (error: any) {
			console.error('Failed to fetch from real server:', error);
			return res.status(500).json({ error: 'Failed to fetch data from real server' });
		}

		// Ambil dari Supabase
		try {
			shadowDraftsList = await shipmentDraftService.getAllShipmentDrafts();
		} catch (error: any) {
			console.error('Failed to fetch from shadow database:', error);
			return res.status(500).json({ error: 'Failed to fetch data from shadow database' });
		}

		// Apabila salah satu atau keduanya mengembalikan list kosong
		if (realDraftsList.length === 0 || shadowDraftsList.length === 0) {
			return res.json(shadowDraftsList.map(draft => draft.data));
		}

		// Buat map id ke draft di Supabase
		const shadowDraftsListMap = new Map<number, any>();
		for (const draft of shadowDraftsList) {
			if (draft.data) {
				const movementData = draft.data as any;
				const movementId = movementData.id;
				shadowDraftsListMap.set(movementId, draft);
			}
		}

		// Array draft final
		const finalDraftsList = [];

		// Bandingkan setiap data dari server asli dengan data yang ada di Supabase
		for (const obj of realDraftsList) {
			const shadowDraft = shadowDraftsListMap.get(obj.id);

			// Apabila ada pasangannya di Supabase
			if (shadowDraft && shadowDraft.data) {
				// Bandingkan untuk mendapat daftar ketidakkonsistenan
				const enrichedDraft = {
					...shadowDraft.data,
					status: checkConsistencyStatus(shadowDraft.data, obj)
				};

				// Push data ke finalDraftsList bersama dengan creation_date_time untuk sorting
				finalDraftsList.push({
					enrichedDraft,
					creation_date_time: shadowDraft.creation_date_time
				});
			}
		}

		// Sort finalDraftsList
		finalDraftsList.sort((a, b) => {
			const dateA = new Date(a.creation_date_time).getTime();
			const dateB = new Date(b.creation_date_time).getTime();
			return dateB - dateA; // Dari paling baru
		});

		// Kirim list berupa list of enrichedDraft
		const sortedFinalDraftsList = finalDraftsList.map(item => item.enrichedDraft);
		res.json(sortedFinalDraftsList);
	} catch (error: any) {
		console.error('Unexpected server error:', error);
		next(error);
	}
};


export const updateShipmentDraftRegular = async (req: Request, res: Response, next: NextFunction) => {
	const updateTimestamp = new Date().toISOString();
	
	try {
		const { id } = req.params;
		const { continue: continueQuery } = req.query;
		const data = req.body.data;

		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const movementId = parseInt(id as string, 10);
		if (isNaN(movementId)) {
			return res.status(400).json({ error: 'Invalid movement ID' });
		}

		// Menentukan apakah akan melakukan sinkronisasi
		const shouldContinue = continueQuery === 'true';

		// Mengecek apakah data yang dituju ada di dalam Supabase
		const shadowDraft = await shipmentDraftService.getShipmentDraftByMovementId(movementId);
		if (!shadowDraft) {
			return res.status(404).json({ error: 'Movement draft not found in shadow database' });
		}

		// Ambil data yang ingin diupdate dari Supabase
		const currentData = shadowDraft.data as any;
		if (!currentData || typeof currentData !== 'object') {
			return res.status(500).json({ error: 'Shadow draft data is null or invalid' });
		}

		if (shouldContinue) {
			const hydratedErpData = getShipmentErpObjectFromHydratedCombinedData(currentData);

			// Update server asli
			const reqBodyContinue = {
				method: 'post',
				maxBodyLength: Infinity,
				headers: {
					'Content-Type': 'application/json'
				},
				url: 'https://6v3itlqgyj.execute-api.ap-southeast-1.amazonaws.com/prod/erp-forwarder',
				data: JSON.stringify({
					axiosConfig: {
						method: 'put',
						url: `${endpointApiUrl}/api/v1/models/M_InOut/${movementId}`,
						data: hydratedErpData,
					}
				})
			};

			try {
				const response = await axios(reqBodyContinue);
				return res.json(response.data);
			} catch (apiError: any) {
				console.error('Failed to update real server:', apiError);
				return res.status(500).json({ error: 'Failed to update real server', details: apiError.message });
			}
		} else {
			const invalidKeys = Object.keys(data).filter(key => !(key in currentData));
			if (invalidKeys.length > 0) {
				return res.status(400).json({ error: 'Invalid keys in data', invalidKeys });
			}

			// Ubah data dari Supabase menggunakan data yang dikirim pengguna
			let updatedData = { ...currentData, ...data };

			// Ubah data Updated
			updatedData = {
				...updatedData, 
				Updated: updateTimestamp,
				M_InOutLine: updatedData.M_InOutLine.map((line: any) => {
					return {
						...line,
						Updated: updateTimestamp
					};
				})
			};

			const hydratedData = hydrateShipment(updatedData);
			const hydratedErpData = getShipmentErpObjectFromHydratedCombinedData(hydratedData);

			// Update Supabase
			try {
				await shipmentDraftService.updateShipmentDraftByMovementId(movementId, hydratedData);

				// Data ke server asli dari requestBody
				const realServerData = hydratedErpData;

				// Update server asli
				const reqBody = {
					method: 'post',
					maxBodyLength: Infinity,
					headers: {
						'Content-Type': 'application/json'
					},
					url: 'https://6v3itlqgyj.execute-api.ap-southeast-1.amazonaws.com/prod/erp-forwarder',
					data: JSON.stringify({
						axiosConfig: {
							method: 'put',
							url: `${endpointApiUrl}/api/v1/models/M_InOut/${movementId}`,
							data: realServerData,
						}
					})
				};

				try {
					const response = await axios(reqBody);
					return res.json(response.data);
				} catch (apiError: any) {
					console.error('Failed to update real server:', apiError);
					return res.status(500).json({ error: 'Failed to update real server' });
				}

			} catch (updateError: any) {
				if (updateError instanceof PrismaClientKnownRequestError) {
					console.error('Prisma update failed:', updateError);
					return res.status(500).json({ error: 'Failed to update shadow database'});
				}
				console.error('Unexpected error during shadow update:', updateError);
				return res.status(500).json({ error: 'Unexpected error during update'});
			}

		}

	} catch (error: any) {
		console.error('Unexpected server error:', error);
		next(error);
	}
};

export const updateShipmentDraftComplete = async (req: Request, res: Response, next: NextFunction) => {
	const updateTimestamp = new Date().toISOString();
	
	try {
		const { id } = req.params;
		const { continue: continueQuery } = req.query;

		const movementId = parseInt(id as string, 10);
		if (isNaN(movementId)) {
			return res.status(400).json({ error: 'Invalid movement ID' });
		}

		// Menentukan apakah akan melakukan sinkronisasi
		const shouldContinue = continueQuery === 'true';

		// Mengecek apakah data yang dituju ada di dalam Supabase
		const shadowDraft = await shipmentDraftService.getShipmentDraftByMovementId(movementId);
		if (!shadowDraft) {
			return res.status(404).json({ error: 'Movement draft not found in shadow database' });
		}

		// Ambil data yang ingin diupdate dari Supabase
		const currentData = shadowDraft.data as any;
		if (!currentData || typeof currentData !== 'object') {
			return res.status(500).json({ error: 'Shadow draft data is null or invalid' });
		}

		if (shouldContinue) {
			// Pastikan data terkini memiliki status 'Completed'
			if (currentData.DocStatus?.id !== 'CO') {
				return res.status(400).json({ error: 'Cannot reverse movement draft. The shadow data is not completed yet' });
			}

			// Update server asli
			const reqBodyContinue = {
				method: 'post',
				maxBodyLength: Infinity,
				headers: {
					'Content-Type': 'application/json'
				},
				url: 'https://6v3itlqgyj.execute-api.ap-southeast-1.amazonaws.com/prod/erp-forwarder',
				data: JSON.stringify({
					axiosConfig: {
						method: 'put',
						url: `${endpointApiUrl}/api/v1/models/M_InOut/${movementId}`,
						data: {'doc-action': 'CO'},
					}
				})
			};

			try {
				const response = await axios(reqBodyContinue);
				return res.json(response.data);
			} catch (apiError: any) {
				console.error('Failed to update real server:', apiError);
				return res.status(500).json({ error: 'Failed to update real server', details: apiError.message });
			}

			
		} else {
			// Pastikan data terkini memiliki status 'Drafted'
			if (currentData.DocStatus?.id !== 'DR') {
				return res.status(400).json({ error: 'Cannot complete movement draft. Current DocStatus is not Drafted' });
			}

			// Ubah DocStatus ke 'Completed'
			const updatedData = { 
				...currentData, 
				DocStatus: {
					propertyLabel: 'Document Status',
					id: 'CO',
					identifier: 'Completed',
					'model-name': 'ad_ref_list'
				},
				IsApproved: true,
				Processed: true,
				Updated: updateTimestamp,
				M_InOutLine: currentData.M_InOutLine.map((line: any) => {
					return {
						...line,
						Processed: true,
						Updated: updateTimestamp
					};
				})
			};

			const hydratedData = hydrateShipment(updatedData);

			// Update Supabase
			try {
				await shipmentDraftService.updateShipmentDraftByMovementId(movementId, hydratedData);
			} catch (updateError: any) {
				if (updateError instanceof PrismaClientKnownRequestError) {
					console.error('Prisma update failed:', updateError);
					return res.status(500).json({ error: 'Failed to update shadow database.', details: updateError.message });
				}
				console.error('Unexpected error during shadow update:', updateError);
				return res.status(500).json({ error: 'Unexpected error during update' });
			}

			// Update server asli
			const reqBody = {
				method: 'post',
				maxBodyLength: Infinity,
				headers: {
					'Content-Type': 'application/json'
				},
				url: 'https://6v3itlqgyj.execute-api.ap-southeast-1.amazonaws.com/prod/erp-forwarder',
				data: JSON.stringify({
					axiosConfig: {
						method: 'put',
						url: `${endpointApiUrl}/api/v1/models/M_InOut/${movementId}`,
						data: { 'doc-action': 'CO' },
					}
				})
			};

			try {
				const response = await axios(reqBody);
				return res.json(response.data);
			} catch (apiError: any) {
				console.error('Failed to update real server:', apiError);
				return res.status(500).json({ error: 'Failed to update real server'});
			}

		}

	} catch (error: any) {
		console.error('Unexpected server error:', error);
		next(error);
	}
};

export const updateShipmentDraftReverse = async (req: Request, res: Response, next: NextFunction) => {
	const updateTimestamp = new Date().toISOString();
	
	try {
		const { id } = req.params;
		const { continue: continueQuery } = req.query;

		const movementId = parseInt(id as string, 10);
		if (isNaN(movementId)) {
			return res.status(400).json({ error: 'Invalid movement ID' });
		}

		// Menentukan apakah akan melakukan sinkronisasi
		const shouldContinue = continueQuery === 'true';

		// Mengecek apakah data yang dituju ada di dalam Supabase
		const shadowDraft = await shipmentDraftService.getShipmentDraftByMovementId(movementId);
		if (!shadowDraft) {
			return res.status(404).json({ error: 'Movement draft not found in shadow database' });
		}

		// Ambil data yang ingin diupdate dari Supabase
		const currentData = shadowDraft.data as any;
		if (!currentData || typeof currentData !== 'object') {
			return res.status(500).json({ error: 'Shadow draft data is null or invalid' });
		}

		if (shouldContinue) {
			// Pastikan data terkini memiliki status 'Reversed'
			if (currentData.DocStatus?.id !== 'RE') {
				return res.status(400).json({ error: 'Cannot reverse movement draft. The shadow data is not reversed yet' });
			}
			
			// Update server asli
			const reqBodyContinue = {
				method: 'post',
				maxBodyLength: Infinity,
				headers: {
					'Content-Type': 'application/json'
				},
				url: 'https://6v3itlqgyj.execute-api.ap-southeast-1.amazonaws.com/prod/erp-forwarder',
				data: JSON.stringify({
					axiosConfig: {
						method: 'put',
						url: `${endpointApiUrl}/api/v1/models/M_InOut/${movementId}`,
						data: {'doc-action': 'CO'},
					}
				})
			};

			try {
				const response = await axios(reqBodyContinue);
				return res.json(response.data);
			} catch (apiError: any) {
				console.error('Failed to update real server:', apiError);
				return res.status(500).json({ error: 'Failed to update real server', details: apiError.message });
			}

		} else {
			// Pastikan data terkini memiliki status 'Completed'
			if (currentData.DocStatus?.id !== 'CO') {
				return res.status(400).json({ error: 'Cannot reverse movement draft. Current DocStatus is not Completed' });
			}

			// Ubah DocStatus ke 'Reversed'
			const updatedData = { 
				...currentData, 
				DocStatus: {
					propertyLabel: 'Document Status',
					id: 'RE',
					identifier: 'Reversed',
					'model-name': 'ad_ref_list'
				},
				IsApproved: true,
				Processed: true,
				Updated: updateTimestamp,
				M_InOutLine: currentData.M_InOutLine.map((line: any) => {
					return {
						...line,
						Processed: true,
						Updated: updateTimestamp
					};
				})
			};

			const hydratedData = hydrateShipment(updatedData);

			// Update Supabase
			try {
				await shipmentDraftService.updateShipmentDraftByMovementId(movementId, hydratedData);
			} catch (updateError: any) {
				if (updateError instanceof PrismaClientKnownRequestError) {
					console.error('Prisma update failed:', updateError);
					return res.status(500).json({ error: 'Failed to update shadow database.', details: updateError.message });
				}
				console.error('Unexpected error during shadow update:', updateError);
				return res.status(500).json({ error: 'Unexpected error during update' });
			}

			// Update server asli
			const reqBody = {
				method: 'post',
				maxBodyLength: Infinity,
				headers: {
					'Content-Type': 'application/json'
				},
				url: 'https://6v3itlqgyj.execute-api.ap-southeast-1.amazonaws.com/prod/erp-forwarder',
				data: JSON.stringify({
					axiosConfig: {
						method: 'put',
						url: `${endpointApiUrl}/api/v1/models/M_InOut/${movementId}`,
						data: { 'doc-action': 'RC' },
					}
				})
			};

			try {
				const response = await axios(reqBody);
				return res.json(response.data);
			} catch (apiError: any) {
				console.error('Failed to update real server:', apiError);
				return res.status(500).json({ error: 'Failed to update real server'});
			}

		}

	} catch (error: any) {
		console.error('Unexpected server error:', error);
		next(error);
	}
};

export const deleteShipmentDraft = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const org_id = parseInt(req.query.orgId as string);
		const creation_date_time = new Date(req.query.creationDateTime as string);
        
		await shipmentDraftService.deleteShipmentDraft(org_id, creation_date_time);
        
		res.status(204).send();
	} catch (error) {
		next(error);
	}
};


// Helper Functions
// STARTER FUNCTIONS
const checkConsistencyStatus = (shadowData: any, realData: any): 
	'OK' | 'CONTINUE-UPDATE' | 'CONTINUE-COMPLETE' | 'CONTINUE-REVERSE' => {
	if (shadowData?.Updated && realData?.Updated) {
		const shadowTimestamp = new Date(shadowData?.Updated);
		const realTimestamp = new Date(realData?.Updated);
		if (shadowTimestamp > realTimestamp) {
			const shadowDocStatus = shadowData.DocStatus?.id;
			const realDocStatus = realData.DocStatus?.id;
	
			if (shadowDocStatus === 'CO' && realDocStatus === 'DR') {
				return 'CONTINUE-COMPLETE';
			}
	
			if (shadowDocStatus === 'RE' && realDocStatus === 'CO') {
				return 'CONTINUE-REVERSE';
			}
	
			if (shadowDocStatus === realDocStatus) {
				return 'CONTINUE-UPDATE';
			}
		} else {
			return 'OK';
		}
	} 
		
	return 'CONTINUE-UPDATE';
};

const hydrateShipment = (combinedData: any) => {
	// Needs to hydrate: M_InOutLine
	const M_InOutLine = JSON.parse(JSON.stringify(combinedData?.M_InOutLine ?? []));

	// STEP 1. Get total amount for each product.
	const productIdToAmountDict: {[key:string]: number} = {};
	const productIdExistsDict: {[key:string]: boolean} = {};
	for (const productId of Object.keys(combinedData.materialMovementProductDict)) {
		let productIdQty = 0;

		for (const trackId of Object.keys(combinedData.materialMovementProductDict[productId].trackIdAndQuantityDict)) {
			productIdQty = productIdQty +
			combinedData.materialMovementProductDict[productId].trackIdAndQuantityDict[trackId].trackIdList
				.reduce((n: any, {quantity}: {quantity: number}) => n + quantity, 0);
		}

		productIdToAmountDict[productId] = productIdQty;

		if (productIdQty > 0) {
			productIdExistsDict[productId] = false;
		}
	}

	// STEP 2. Update total amount for all products previously existing in M_InOutLine.
	for (let i = 0; i < M_InOutLine.length; i++) {
		const productIdCur = M_InOutLine[i].M_Product_ID?.id ?? M_InOutLine[i].M_Product_ID;

		M_InOutLine[i].MovementQty = productIdToAmountDict?.[productIdCur] ?? 0;

		productIdExistsDict[productIdCur] = true;
	}

	// STEP 3. For new products, we add new M_InOutLine items.
	let lineCounter = 0;
	for (const productIdCur of Object.keys(productIdExistsDict)) {
		if (!productIdExistsDict[productIdCur]) {
			M_InOutLine.push({
				'AD_Client_ID':  1000000,
				'AD_Org_ID': combinedData.AD_Org_ID,
				'IsActive': true,
				'M_Locator_ID': combinedData.M_Locator_ID,
				'M_LocatorTo_ID': combinedData.M_LocatorTo_ID,
				'M_Product_ID': Number(productIdCur),
				'MovementQty': productIdToAmountDict[productIdCur],
				'Line': lineCounter + M_InOutLine.length,
				'BoxQty': 0,
				'PalletQty': 0,
			});
			lineCounter += 1;
		}

		productIdExistsDict[productIdCur] = true;
	}

	return {
		...combinedData,
		'M_InOutLine': M_InOutLine,
	};
};

const getShipmentErpObjectFromHydratedCombinedData = (combinedData: any) => {
	return {
		...combinedData,

		'employeeNumber': undefined,
		'materialMovementProductDict': undefined,
		'M_Locator_ID': undefined,
		'M_LocatorTo_ID': undefined,
	};
};