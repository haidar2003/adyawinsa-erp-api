// controllers/inventoryMoveDraft.controller.ts

import { NextFunction } from 'express';
import { Request, Response } from 'express-serve-static-core';
import { body, validationResult } from 'express-validator';
import * as trackingService from '../service/tracking.service';
import axios from 'axios';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { getTransferItems } from '../service/tracking.service';

const endpointApiUrl = process.env.ENDPOINT_ERP_API_URL ?? 'https://server.tricentrumfortuna.com:12';

// Validation rules
// export const inventoryMoveDraftCreateValidationRules = [
// 	body('creation_date_time').isISO8601().toDate().withMessage('Creation date time in ISO 8601 format is required.'),
// 	body('data').isObject().withMessage('Data must be a valid JSON object'),
// ];

// export const inventoryMoveDraftUpdateValidationRules = [
// 	body('data').isObject().withMessage('Data must be a valid JSON object'),
// ];

// Controllers
export const postTrackId = async (req: Request, res: Response, next: NextFunction) => {
    
	const imDraft = req.body.imDraft;

	try {

		const hydratedIMDraft = hydrateInventoryMove(imDraft);
		const hydratedIMDraftErp = getInventoryMoveErpObjectFromHydratedCombinedData(hydratedIMDraft);

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
					'data': hydratedIMDraftErp,
				}
			})
		};
	
		const response = await axios(reqBody);

		console.log(response);

		const shadowData = {
			...response.data.returnBody,

			// SHADOW VARIABLES
			employeeNumber: hydratedIMDraft.employeeNumber,
			materialMovementProductDict: hydratedIMDraft.materialMovementProductDict,
			M_Locator_ID: hydratedIMDraft.M_Locator_ID,
			M_LocatorTo_ID: hydratedIMDraft.M_LocatorTo_ID
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

export const getTrackId = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;

		// Ambil dari Supabase
		const trackIdObject = await trackingService.getTrackIdObject(id);

		if (!trackIdObject) {
			return res.status(404).json({ error: 'TrackId not found in shadow database' });
		}

		// Kirim response
		return res.json(trackIdObject);
        
	} catch (error: any) {
		console.error('Unexpected server error:', error);
		next(error);
	}
};

export const getTrackIdList = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const trackIdList = await trackingService.getAllTrackIdObjects();

		// Kirim response
		return res.json(trackIdList);
        
	} catch (error: any) {
		console.error('Unexpected server error:', error);
		next(error);
	}
};