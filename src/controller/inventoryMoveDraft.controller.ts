// controllers/inventoryMoveDraft.controller.ts

import { NextFunction } from 'express';
import { Request, Response } from 'express-serve-static-core';
import { body, validationResult } from 'express-validator';
import { extractInventoryMoveDraftDTO } from '../interfaces/inventoryMoveDraft.dto';
import * as inventoryMoveDraftService from '../service/inventoryMoveDraft.service';
import axios from 'axios';

const endpointApiUrl = process.env.ENDPOINT_ERP_API_URL ?? 'https://server.tricentrumfortuna.com:12';

// Validation rules
export const inventoryMoveDraftValidationRules = [
	body('creation_date_time').isISO8601().toDate().withMessage('Creation date time in ISO 8601 format is required.'),
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

		console.log(M_MovementLine);

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

		// const draftData = {
		// 	org_id: req.body.org_id,
		// 	creation_date_time: new Date(req.body.creation_date_time),
		// 	movement_id: req.body.movement_id,
		// 	data: req.body.data
		// };

		// const result = await inventoryMoveDraftService.createInventoryMoveDraft(draftData);
		
		res.status(201).json({});
	} catch (error) {
		console.log('Error in createInventoryMoveDraft controller: ', error);
		next(error);
	}
};

export const getInventoryMoveDraft = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { orgId, creationDateTime, movementId } = req.query;

		if (movementId) {
			const movement_id = parseInt(movementId as string);
			const draft = await inventoryMoveDraftService.getInventoryMoveDraftByMovementId(movement_id);
			return res.json(draft);
		}

		if (orgId && creationDateTime) {
			const org_id = parseInt(orgId as string);
			const creation_date_time = new Date(creationDateTime as string);
			const draft = await inventoryMoveDraftService.getInventoryMoveDraftById(org_id, creation_date_time);
			return res.json(draft);
		}

		const drafts = await inventoryMoveDraftService.getAllInventoryMoveDrafts();
		res.json(drafts);
	} catch (error) {
		next(error);
	}
};



export const updateInventoryMoveDraft = async (req: Request, res: Response, next: NextFunction) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	try {
		const org_id = parseInt(req.body.org_id);
		const creation_date_time = new Date(req.body.creation_date_time as string);
		const updateData = { data: req.body.data };
        
		const updatedDraft = await inventoryMoveDraftService.updateInventoryMoveDraft(
			org_id,
			creation_date_time,
			updateData
		);
        
		res.json(updatedDraft);
	} catch (error) {
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