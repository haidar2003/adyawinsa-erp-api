// routes/inventoryMoveDraft.route.ts

import express, { Router } from 'express';
import * as inventoryMoveDraftController from '../controller/inventoryMoveDraft.controller';

const inventoryMoveDraftRouter: Router = express.Router();

// Apply validation middleware where needed
const { inventoryMoveDraftCreateValidationRules, inventoryMoveDraftUpdateValidationRules } = inventoryMoveDraftController;

// Routes
inventoryMoveDraftRouter.post('/', 
	inventoryMoveDraftCreateValidationRules,
	inventoryMoveDraftController.createInventoryMoveDraft
);

// Endpoint untuk mengambil semua
inventoryMoveDraftRouter.get('/', inventoryMoveDraftController.getInventoryMoveDraftAll);

// Endpoint untuk mengambil berdasarkan ID
inventoryMoveDraftRouter.get('/:id', inventoryMoveDraftController.getInventoryMoveDraft);

// Endpoint untuk memperbarui Umum
inventoryMoveDraftRouter.put('/:id', 
    inventoryMoveDraftUpdateValidationRules, 
    inventoryMoveDraftController.updateInventoryMoveDraftRegular
);

// Endpoint untuk menandai Selesai (Complete)
inventoryMoveDraftRouter.put('/:id/complete', 
    inventoryMoveDraftController.updateInventoryMoveDraftComplete
);

// Endpoint untuk menandai Reverse (Reverse)
inventoryMoveDraftRouter.put('/:id/reverse', 
    inventoryMoveDraftController.updateInventoryMoveDraftReverse
);

inventoryMoveDraftRouter.delete('/',
	inventoryMoveDraftController.deleteInventoryMoveDraft
);

export default inventoryMoveDraftRouter;