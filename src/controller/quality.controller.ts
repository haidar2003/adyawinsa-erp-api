// controllers/inventoryMoveDraft.controller.ts

import { NextFunction } from 'express';
import { Request, Response } from 'express-serve-static-core';
import { body } from 'express-validator';
import * as qualityCheckService from '../service/qualityCheck.service';

// Validation rules
export const qualityCheckDraftCreateValidationRules = [
	body('track_id').isString().withMessage('Track ID must be included'),
];

// Controllers
export const postQualityCheck = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const qualityCheckDraft = req.body;

		const draftData = {
			track_id: qualityCheckDraft.track_id || 'track-' + new Date().toISOString(),
			track_type: qualityCheckDraft.track_type || '',
			source_data: qualityCheckDraft.source_data || {},
			object_data: {
				...qualityCheckDraft
			},
		};

		const result = await qualityCheckService.createQualityCheckObject(draftData);

		// Kirim response
		return res.json(result);
	} catch (error: any) {
		console.error('Unexpected server error:', error);
		next(error);
	}
};

export const getQualityCheck = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;

		// Ambil dari Supabase
		const qualityCheckObject = await qualityCheckService.getQualityCheckObject(Number(id.split('*')[0]), id.split('*')[1]);

		if (!qualityCheckObject) {
			return res.status(404).json({ error: 'QualityCheck not found in shadow database' });
		}

		// Kirim response
		return res.json(qualityCheckObject);
        
	} catch (error: any) {
		console.error('Unexpected server error:', error);
		next(error);
	}
};

export const getQualityCheckList = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const qualityCheckList = await qualityCheckService.getAllQualityCheckObjects();

		// Kirim response
		return res.json(qualityCheckList);
        
	} catch (error: any) {
		console.error('Unexpected server error:', error);
		next(error);
	}
};