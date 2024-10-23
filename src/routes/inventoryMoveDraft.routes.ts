// routes/inventoryMoveDraft.route.ts

import express, { Router } from 'express';
import * as inventoryMoveDraftController from '../controller/inventoryMoveDraft.controller';

const inventoryMoveDraftRouter: Router = express.Router();

// Apply validation middleware where needed
const { inventoryMoveDraftValidationRules } = inventoryMoveDraftController;

// Routes
inventoryMoveDraftRouter.post('/', 
    inventoryMoveDraftValidationRules,
    inventoryMoveDraftController.createInventoryMoveDraft
);

inventoryMoveDraftRouter.get('/', inventoryMoveDraftController.getInventoryMoveDraft);

inventoryMoveDraftRouter.put('/',
    inventoryMoveDraftValidationRules,
    inventoryMoveDraftController.updateInventoryMoveDraft
);

inventoryMoveDraftRouter.delete('/',
    inventoryMoveDraftController.deleteInventoryMoveDraft
);

export default inventoryMoveDraftRouter;