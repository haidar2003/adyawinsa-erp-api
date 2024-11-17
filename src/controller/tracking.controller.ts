// controllers/inventoryMoveDraft.controller.ts

import { NextFunction } from 'express';
import { Request, Response } from 'express-serve-static-core';
import { body } from 'express-validator';
import * as trackingService from '../service/tracking.service';

// Validation rules
export const trackingDraftCreateValidationRules = [
	body('track_id').isString().withMessage('Track ID must be included'),
];

// Controllers
export const postTrackId = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const trackIdDraft = req.body;

		const draftData = {
			track_id: trackIdDraft.track_id || 'track-' + new Date().toISOString(),
			track_type: trackIdDraft.track_type || '',
			source_data: trackIdDraft.source_data || {},
			object_data: {
				...trackIdDraft
			},
		};

		const result = await trackingService.createTrackIdObject(draftData);

		// Kirim response
		return res.json(result);
	} catch (error: any) {
		console.error('Unexpected server error:', error);
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