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

inventoryMoveDraftRouter.get('/', inventoryMoveDraftController.getInventoryMoveDraft);

inventoryMoveDraftRouter.put('/',
	inventoryMoveDraftUpdateValidationRules,
	inventoryMoveDraftController.updateInventoryMoveDraft
);

inventoryMoveDraftRouter.delete('/',
	inventoryMoveDraftController.deleteInventoryMoveDraft
);

export default inventoryMoveDraftRouter;