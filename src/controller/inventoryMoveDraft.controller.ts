// controllers/inventoryMoveDraft.controller.ts

import { NextFunction } from 'express';
import { Request, Response } from 'express-serve-static-core';
import { body, validationResult } from 'express-validator';
import * as inventoryMoveDraftService from '../service/inventoryMoveDraft.service';
import axios from 'axios';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

const endpointApiUrl = process.env.ENDPOINT_ERP_API_URL ?? 'https://server.tricentrumfortuna.com:12';

// Validation rules
export const inventoryMoveDraftCreateValidationRules = [
	body('creation_date_time').isISO8601().toDate().withMessage('Creation date time in ISO 8601 format is required.'),
	body('data').isObject().withMessage('Data must be a valid JSON object'),
];

export const inventoryMoveDraftUpdateValidationRules = [
	body('data').isObject().withMessage('Data must be a valid JSON object'),
];

// Controllers
export const createInventoryMoveDraft = async (req: Request, res: Response, next: NextFunction) => {
    
	const imDraft = req.body.imDraft;
	const materialMovementProductDict = req.body.imDraft.materialMovementProductDict;

	try {
		const M_MovementLine = [];
		let lineCounter = 1;
	
		for (const productId of Object.keys(materialMovementProductDict)) {
			let productIdQty = 0;

			for (const trackId of Object.keys(materialMovementProductDict[productId].trackIdAndQuantityDict)) {
				productIdQty = productIdQty +
					materialMovementProductDict[productId].trackIdAndQuantityDict[trackId].trackIdList
						.reduce((n: any, {quantity}: {quantity: number}) => n + quantity, 0);
			}

			M_MovementLine.push({
				'AD_Client_ID':  1000000,
				'AD_Org_ID': req.body.imDraft.AD_Org_ID,
				'IsActive': true,
				'M_Locator_ID': req.body.imDraft.M_Locator_ID,
				'M_LocatorTo_ID': req.body.imDraft.M_LocatorTo_ID,
				'M_Product_ID': Number(productId), 
				'MovementQty': productIdQty, 
				'Line': lineCounter, 
				'BoxQty': 0,
				'PalletQty': 0,
			});
			lineCounter += 1;
		}

		const imDraftErp = {
			...imDraft,

			'M_MovementLine': M_MovementLine,

			'employeeNumber': undefined,
			'materialMovementProductDict': undefined,
			'M_Locator_ID': undefined,
			'M_LocatorTo_ID': undefined,
		};

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
					'url': endpointApiUrl + '/api/v1/models/M_Movement',
					'data': imDraftErp,
				}
			})
		};
	
		const response = await axios(reqBody);

		console.log(response);

		const shadowMovementLines = response.data.returnBody.M_MovementLine.map((line: any) => {
			const productId = line.M_Product_ID.id.toString();
			return {
				...line,
				trackIdAndQuantityDict: materialMovementProductDict[productId].trackIdAndQuantityDict || {},
			};
		});

		const shadowData = {
			...response.data.returnBody,
			employeeNumber: imDraft.employeeNumber,
			M_MovementLine: shadowMovementLines
		};

		const draftData = {
			org_id: shadowData.AD_Org_ID.id,
			creation_date_time: new Date(shadowData.Created),
			movement_id: shadowData.id,
			data: shadowData
		};

		const result = await inventoryMoveDraftService.createInventoryMoveDraft(draftData);
		
		res.status(response.status).json(result); 
	} catch (error) {
		console.log('Error in createInventoryMoveDraft controller: ', error);
		next(error);
	}
};

export const getInventoryMoveDraft = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;

		const movementId = parseInt(id as string, 10);
		if (isNaN(movementId)) {
			return res.status(400).json({ error: 'Invalid movement ID' });
		}

		// Ambil dari Supabase
		const shadowDraft = await inventoryMoveDraftService.getInventoryMoveDraftByMovementId(movementId);

		if (!shadowDraft) {
			return res.status(404).json({ error: 'InventoryMove not found in shadow database' });
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
						'url': `${endpointApiUrl}/api/v1/models/M_Movement/${movementId}`,
						'params': {
							'$orderby': 'Created desc',
							'$expand': 'M_MovementLine',
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
		const inconsistencies = compareDrafts(shadowDraft.data, realDraft);
		const enrichedDraft = {
			...(shadowDraft.data as any),
			inconsistencies
		};

		// Kirim response
		return res.json(enrichedDraft);
        
	} catch (error: any) {
		console.error('Unexpected server error:', error);
		next(error);
	}
};

export const getInventoryMoveDraftAll = async (req: Request, res: Response, next: NextFunction) => {
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
						'url': `${endpointApiUrl}/api/v1/models/M_Movement`,
						'params': {
							'$orderby': 'Created desc',
							'$expand': 'M_MovementLine',
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
			shadowDraftsList = await inventoryMoveDraftService.getAllInventoryMoveDrafts();
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
				const inconsistencies: any = compareDrafts(shadowDraft.data, obj);
				const enrichedDraft = {
					...shadowDraft.data,
					inconsistencies
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


export const updateInventoryMoveDraftRegular = async (req: Request, res: Response, next: NextFunction) => {
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
		const shadowDraft = await inventoryMoveDraftService.getInventoryMoveDraftByMovementId(movementId);
		if (!shadowDraft) {
			return res.status(404).json({ error: 'Movement draft not found in shadow database' });
		}

		// Ambil data yang ingin diupdate dari Supabase
		const currentData = shadowDraft.data as any;
		if (!currentData || typeof currentData !== 'object') {
			return res.status(500).json({ error: 'Shadow draft data is null or invalid' });
		}

		if (shouldContinue) {
			// Ambil dari server asli
			let realData: any = null;
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
							'url': `${endpointApiUrl}/api/v1/models/M_Movement/${currentData.id}`,
							'params': {
								'$orderby': 'Created desc',
								'$expand': 'M_MovementLine',
							}
						}
					})
				};

				const response = await axios(reqBody);
				realData = response.data.returnBody;
			} catch (error: any) {
				console.error('Failed to fetch from real server:', error);
				return res.status(500).json({ error: 'Failed to fetch data from real server'});
			}

			// Bandingkan untuk mendapat daftar ketidakkonsistenan
			const inconsistencies: any = compareDrafts(shadowDraft.data, realData);

			// Yang akan dikirim ke server asli
			const realServerData: any = {};
            
			if (inconsistencies.headerInconsistencies?.length > 0) {
				inconsistencies.headerInconsistencies.forEach((key: string) => {
					if (key !== 'DocStatus') {
						realServerData[key] = currentData[key];
					}
				});
			}

			if (inconsistencies.movementLineInconsistencies && inconsistencies.movementLineInconsistencies.length > 0) {
				realServerData['M_MovementLine'] = currentData.M_MovementLine.map((line: any) => {
					const newLine = { ...line };
					delete newLine.trackIdAndQuantityDict;
					delete newLine.ProcessCheck;
					return newLine;
				});
			}

			if (Object.keys(realServerData).length !== 0) {
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
							url: `${endpointApiUrl}/api/v1/models/M_Movement/${movementId}`,
							data: realServerData,
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
				return res.status(500).json({ error: 'No synchronization data to be sent to the real server' });
			}

		} else {
			const invalidKeys = Object.keys(data).filter(key => !(key in currentData));
			if (invalidKeys.length > 0) {
				return res.status(400).json({ error: 'Invalid keys in data', invalidKeys });
			}

			// Ubah data dari Supabase menggunakan data yang dikirim pengguna
			const updatedData = { ...currentData, ...data };

			// Update Supabase
			try {
				await inventoryMoveDraftService.updateInventoryMoveDraftByMovementId(movementId, updatedData);

				// Data ke server asli dari requestBody
				const realServerData = { ...data };

				// Hilangkan key employeeNumber (karena tidak ada di data server asli)
				if ('employeeNumber' in realServerData) {
					delete realServerData.employeeNumber;
				}
				// Hilangkan trackIdAndQuantityDict dan ProcessCheck (karena tidak ada di data server asli)
				if (realServerData.M_MovementLine && Array.isArray(realServerData.M_MovementLine)) {
					realServerData.M_MovementLine = realServerData.M_MovementLine.map((line: any) => {
						const newLine = { ...line };
						delete newLine.trackIdAndQuantityDict;
						delete newLine.ProcessCheck;
						return newLine;
					});
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
							url: `${endpointApiUrl}/api/v1/models/M_Movement/${movementId}`,
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

export const updateInventoryMoveDraftComplete = async (req: Request, res: Response, next: NextFunction) => {
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
		const shadowDraft = await inventoryMoveDraftService.getInventoryMoveDraftByMovementId(movementId);
		if (!shadowDraft) {
			return res.status(404).json({ error: 'Movement draft not found in shadow database' });
		}

		// Ambil data yang ingin diupdate dari Supabase
		const currentData = shadowDraft.data as any;
		if (!currentData || typeof currentData !== 'object') {
			return res.status(500).json({ error: 'Shadow draft data is null or invalid' });
		}

		if (shouldContinue) {
			// Ambil dari server asli
			let realData: any = null;
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
							'url': `${endpointApiUrl}/api/v1/models/M_Movement/${currentData.id}`,
							'params': {
								'$orderby': 'Created desc',
								'$expand': 'M_MovementLine',
							}
						}
					})
				};

				const response = await axios(reqBody);
				realData = response.data.returnBody;
			} catch (error: any) {
				console.error('Failed to fetch from real server:', error);
				return res.status(500).json({ error: 'Failed to fetch data from real server'});
			}

			// Bandingkan untuk mendapat daftar ketidakkonsistenan
			const inconsistencies: any = compareDrafts(shadowDraft.data, realData);

			// Yang akan dikirim ke server asli
			const realServerData: any = {};
            
			if (inconsistencies.headerInconsistencies  && inconsistencies.headerInconsistencies.includes('DocStatus')) {
				if (currentData.DocStatus.id === 'CO' && realData.DocStatus.id === 'DR') {
					realServerData['doc-action'] = 'CO';
				}
			}

			if (Object.keys(realServerData).length !== 0) {
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
							url: `${endpointApiUrl}/api/v1/models/M_Movement/${movementId}`,
							data: realServerData,
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
				return res.status(500).json({ error: 'No synchronization data to be sent to the real server' });
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
				M_MovementLine: currentData.M_MovementLine.map((line: any) => {
					return {
						...line,
						Processed: true
					};
				})
			};

			// Update Supabase
			try {
				await inventoryMoveDraftService.updateInventoryMoveDraftByMovementId(movementId, updatedData);
			} catch (updateError: any) {
				if (updateError instanceof PrismaClientKnownRequestError) {
					console.error('Prisma update failed:', updateError);
					return res.status(500).json({ error: 'Failed to update shadow database.', details: updateError.message });
				}
				console.error('Unexpected error during shadow update:', updateError);
				return res.status(500).json({ error: 'Unexpected error during update' });
			}

			// Update server asli
			const realServerData = { 'doc-action': 'CO' };
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
						url: `${endpointApiUrl}/api/v1/models/M_Movement/${movementId}`,
						data: realServerData,
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

export const updateInventoryMoveDraftReverse = async (req: Request, res: Response, next: NextFunction) => {
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
		const shadowDraft = await inventoryMoveDraftService.getInventoryMoveDraftByMovementId(movementId);
		if (!shadowDraft) {
			return res.status(404).json({ error: 'Movement draft not found in shadow database' });
		}

		// Ambil data yang ingin diupdate dari Supabase
		const currentData = shadowDraft.data as any;
		if (!currentData || typeof currentData !== 'object') {
			return res.status(500).json({ error: 'Shadow draft data is null or invalid' });
		}

		if (shouldContinue) {
			// Ambil dari server asli
			let realData: any = null;
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
							'url': `${endpointApiUrl}/api/v1/models/M_Movement/${currentData.id}`,
							'params': {
								'$orderby': 'Created desc',
								'$expand': 'M_MovementLine',
							}
						}
					})
				};

				const response = await axios(reqBody);
				realData = response.data.returnBody;
			} catch (error: any) {
				console.error('Failed to fetch from real server:', error);
				return res.status(500).json({ error: 'Failed to fetch data from real server'});
			}

			// Bandingkan untuk mendapat daftar ketidakkonsistenan
			const inconsistencies: any = compareDrafts(shadowDraft.data, realData);

			// Yang akan dikirim ke server asli
			const realServerData: any = {};
            
			if (inconsistencies.headerInconsistencies  && inconsistencies.headerInconsistencies.includes('DocStatus')) {
				if (currentData.DocStatus.id === 'RE' && realData.DocStatus.id === 'CO') {
					realServerData['doc-action'] = 'RC';
				}
			}

			if (Object.keys(realServerData).length !== 0) {
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
							url: `${endpointApiUrl}/api/v1/models/M_Movement/${movementId}`,
							data: realServerData,
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
				return res.status(500).json({ error: 'No synchronization data to be sent to the real server' });
			}
            
		} else {
			// Pastikan data terkini memiliki status 'Completed'
			if (currentData.DocStatus?.id !== 'CO') {
				return res.status(400).json({ error: 'Cannot complete movement draft. Current DocStatus is not Completed' });
			}

			// Ubah DocStatus ke 'Reversed'
			const updatedData = { 
				...currentData, 
				DocStatus: {
					propertyLabel: 'Document Status',
					id: 'RE',
					identifier: 'Reversed',
					'model-name': 'ad_ref_list'
				}
			};

			// Update Supabase
			try {
				await inventoryMoveDraftService.updateInventoryMoveDraftByMovementId(movementId, updatedData);
			} catch (updateError: any) {
				if (updateError instanceof PrismaClientKnownRequestError) {
					console.error('Prisma update failed:', updateError);
					return res.status(500).json({ error: 'Failed to update shadow database.', details: updateError.message });
				}
				console.error('Unexpected error during shadow update:', updateError);
				return res.status(500).json({ error: 'Unexpected error during update' });
			}

			// Update server asli
			const realServerData = { 'doc-action': 'RC' };
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
						url: `${endpointApiUrl}/api/v1/models/M_Movement/${movementId}`,
						data: realServerData,
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

export const deleteInventoryMoveDraft = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const org_id = parseInt(req.query.orgId as string);
		const creation_date_time = new Date(req.query.creationDateTime as string);
        
		await inventoryMoveDraftService.deleteInventoryMoveDraft(org_id, creation_date_time);
        
		res.status(204).send();
	} catch (error) {
		next(error);
	}
};


// Helper Functions
// compareDrafts -> mengembalikan ketidakkonsistenan
const compareDrafts = (shadowData: any, realData: any): any => {
	const inconsistencies: any = {};

	// Membandingkan Header kecuali employeeNumber dan Updated
	const headerInconsistencies: string[] = [];
	for (const key of Object.keys(shadowData)) {
		if (key !== 'M_MovementLine' && key !== 'employeeNumber' && key !== 'Updated' && key !== 'Description') {
			const shadowValue = JSON.stringify(shadowData[key]);
			const realValue = JSON.stringify(realData[key]);

			if (shadowValue !== realValue) {
				headerInconsistencies.push(key);
			}
		}
	}
	if (headerInconsistencies.length > 0) {
		inconsistencies.headerInconsistencies = headerInconsistencies;
	}

	// M_MovementLine
	const movementLineInconsistencies: any[] = [];
	const shadowLines = shadowData.M_MovementLine || [];
	const realLines = realData.M_MovementLine || [];

	// Buat mapping produk-produk di M_MovementLine data asli dan Supabase
	const shadowLinesMap = new Map<number, any>();
	for (const shadowLine of shadowLines) {
		const productId = shadowLine.M_Product_ID.id || shadowLine.M_Product_ID;
		shadowLinesMap.set(productId, shadowLine);
	}
	const realLinesMap = new Map<number, any>();
	for (const line of realLines) {
		const productId = line.M_Product_ID.id || line.M_Product_ID;
		realLinesMap.set(productId, line);
	}

	const shadowProductIds = Array.from(shadowLinesMap.keys());
	const realProductIds = Array.from(realLinesMap.keys());

	// Produk ada di data Supabase tapi tidak ada di data asli
	const productsInShadowNotInReal = shadowProductIds.filter(productId => !realLinesMap.has(productId));
	if (productsInShadowNotInReal.length > 0) {
		inconsistencies.productsInShadowNotInReal = productsInShadowNotInReal;
	}

	// Produk ada di data asli tapi tidak ada di data Supabase
	const productsInRealNotInShadow = realProductIds.filter(productId => !shadowLinesMap.has(productId));
	if (productsInRealNotInShadow.length > 0) {
		inconsistencies.productsInRealNotInShadow = productsInRealNotInShadow;
	}
    
	// Membandingkan setiap productId di M_MovementLine
	for (const productId of shadowProductIds) {
		if (realLinesMap.has(productId)) {
			const shadowLine = shadowLinesMap.get(productId);
			const realLine = realLinesMap.get(productId);

			const lineInconsistencies: string[] = [];

			// Bandingkan setiap key kecuali trackIdAndQuantityDict, M_Movement_ID, model-name
			for (const key of Object.keys(shadowLine)) {
				if (key !== 'trackIdAndQuantityDict' && key !== 'M_Movement_ID' && key !== 'model-name' && key !== 'Updated') {
					const shadowValue = JSON.stringify(shadowLine[key]);
					const realValue = JSON.stringify(realLine[key]);

					if (shadowValue !== realValue) {
						lineInconsistencies.push(key);
					}
				}
			}

			if (lineInconsistencies.length > 0) {
				movementLineInconsistencies.push({
					productId: productId,
					inconsistentFields: lineInconsistencies
				});
			}
		}
	}

	if (movementLineInconsistencies.length > 0) {
		inconsistencies.movementLineInconsistencies = movementLineInconsistencies;
	}

	return inconsistencies;
};

// STARTER FUNCTIONS

const checkConsistencyStatus = (shadowData: any, realData: any): 
	'OK' | 'CONTINUE-UPDATE' | 'CONTINUE-COMPLETE' | 'CONTINUE-REVERSE' => {
	return 'OK';
};

// NOT USED IN CREATE.
const hydrateInventoryMove = (combinedData: any) => {

};

const getInventoryMoveErpObjectFromCombinedData = (combinedData: any) => {
	return {
		...combinedData,

		'employeeNumber': undefined,
		'materialMovementProductDict': undefined,
		'M_Locator_ID': undefined,
		'M_LocatorTo_ID': undefined,
	};
};