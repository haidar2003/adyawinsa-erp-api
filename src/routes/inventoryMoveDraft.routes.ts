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
	inventoryMoveDraftController.updateInventoryMoveDraftRegular
);

inventoryMoveDraftRouter.put('/complete',
	inventoryMoveDraftController.updateInventoryMoveDraftComplete
);

inventoryMoveDraftRouter.put('/reverse',
	inventoryMoveDraftController.updateInventoryMoveDraftReverse
);

inventoryMoveDraftRouter.delete('/',
	inventoryMoveDraftController.deleteInventoryMoveDraft
);

export default inventoryMoveDraftRouter;