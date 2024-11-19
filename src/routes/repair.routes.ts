// routes/inventoryMoveDraft.route.ts

import express, { Router } from 'express';
import * as repairController from '../controller/repair.controller';

const repairRouter: Router = express.Router();

// Apply validation middleware where needed
const { repairDraftCreateValidationRules } = repairController;

// Routes
repairRouter.post('/', 
	repairDraftCreateValidationRules,
	repairController.postRepair
);

// Endpoint untuk mengambil semua
repairRouter.get('/', repairController.getRepairList);

// Endpoint untuk mengambil berdasarkan ID
repairRouter.get('/:id', repairController.getRepair);

export default repairRouter;