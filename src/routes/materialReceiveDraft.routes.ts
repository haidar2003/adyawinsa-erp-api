// routes/materialReceiveDraft.route.ts

import express, { Router } from 'express';
import * as materialReceiveDraftController from '../controller/materialReceiveDraft.controller';

const materialReceiveDraftRouter: Router = express.Router();

// Apply validation middleware where needed
const { materialReceiveDraftCreateValidationRules, materialReceiveDraftUpdateValidationRules } = materialReceiveDraftController;

// Routes
materialReceiveDraftRouter.post('/', 
	materialReceiveDraftCreateValidationRules,
	materialReceiveDraftController.createMaterialReceiveDraft
);

// Endpoint untuk mengambil semua
materialReceiveDraftRouter.get('/', materialReceiveDraftController.getMaterialReceiveDraftAll);

// Endpoint untuk mengambil berdasarkan ID
materialReceiveDraftRouter.get('/:id', materialReceiveDraftController.getMaterialReceiveDraft);

// Endpoint untuk memperbarui Umum
materialReceiveDraftRouter.put('/:id', 
	materialReceiveDraftUpdateValidationRules, 
	materialReceiveDraftController.updateMaterialReceiveDraftRegular
);

// Endpoint untuk menandai Selesai (Complete)
materialReceiveDraftRouter.put('/:id/complete', 
	materialReceiveDraftController.updateMaterialReceiveDraftComplete
);

// Endpoint untuk menandai Reverse (Reverse)
materialReceiveDraftRouter.put('/:id/reverse', 
	materialReceiveDraftController.updateMaterialReceiveDraftReverse
);

export default materialReceiveDraftRouter;