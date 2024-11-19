// routes/inventoryMoveDraft.route.ts

import express, { Router } from 'express';
import * as qualityController from '../controller/quality.controller';

const qualityRouter: Router = express.Router();

// Apply validation middleware where needed
const { qualityCheckDraftCreateValidationRules } = qualityController;

// Routes
qualityRouter.post('/', 
	qualityCheckDraftCreateValidationRules,
	qualityController.postQualityCheck
);

// Endpoint untuk mengambil semua
qualityRouter.get('/', qualityController.getQualityCheckList);

// Endpoint untuk mengambil berdasarkan ID
qualityRouter.get('/:id', qualityController.getQualityCheck);

export default qualityRouter;