// controllers/inventoryMoveDraft.controller.ts

import { NextFunction } from 'express';
import { Request, Response } from 'express-serve-static-core';
import { body } from 'express-validator';
import * as repairService from '../service/repair.service';

// Validation rules
export const repairDraftCreateValidationRules = [
	body('track_id').isString().withMessage('Track ID must be included'),
];

// Controllers
export const postRepair = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const repairDraft = req.body;

		const result = await repairService.createRepairJobObject({
			...repairDraft,
			creation_date_time: repairDraft.creation_date_time ?? new Date().toISOString(),
		});


		// Kirim response
		return res.json(result);
	} catch (error: any) {
		console.error('Unexpected server error:', error);
		next(error);
	}
};

export const getRepair = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;

		// Ambil dari Supabase
		const repairObject = await repairService.getRepairJobObject(Number(id.split('*')[0]), id.split('*')[1]);

		if (!repairObject) {
			return res.status(404).json({ error: 'Repair not found in shadow database' });
		}

		// Kirim response
		return res.json(repairObject);
        
	} catch (error: any) {
		console.error('Unexpected server error:', error);
		next(error);
	}
};

export const getRepairList = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const repairList = await repairService.getAllRepairJobObjects();

		// Kirim response
		return res.json(repairList);
        
	} catch (error: any) {
		console.error('Unexpected server error:', error);
		next(error);
	}
};