// controllers/inventoryMoveDraft.controller.ts

import { NextFunction } from 'express';
import { Request, Response } from 'express-serve-static-core';
import { body, validationResult } from 'express-validator';
import { extractInventoryMoveDraftDTO } from '../interfaces/inventoryMoveDraft.dto';
import * as inventoryMoveDraftService from '../service/inventoryMoveDraft.service';

// Validation rules
export const inventoryMoveDraftValidationRules = [
    body('creation_date_time').isISO8601().toDate().withMessage('Creation date time in ISO 8601 format is required.'),
    body('data').isObject().withMessage('Data must be a valid JSON object'),
];

// Controllers
export const createInventoryMoveDraft = async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const draftData = {
            org_id: req.body.org_id,
            creation_date_time: new Date(req.body.creation_date_time),
            movement_id: req.body.movement_id,
            data: req.body.data
        };

        const result = await inventoryMoveDraftService.createInventoryMoveDraft(draftData);
        res.status(201).json(result);
    } catch (error) {
        console.log('Error in createInventoryMoveDraft controller: ', error)
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