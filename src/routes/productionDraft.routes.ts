// routes/shipmentDraft.route.ts

import express, { Router } from 'express';
import * as productionSingleDraftController from '../controller/productionSingleDraft.controller';

const productionDraftRouter: Router = express.Router();

productionDraftRouter.post('/', productionSingleDraftController.createProductionSingleDraft);

productionDraftRouter.get('/',productionSingleDraftController.getProductionSingleDraftAll);

productionDraftRouter.get('/:id', productionSingleDraftController.getProductionSingleDraft);

productionDraftRouter.put('/:id/complete', productionSingleDraftController.updateProductionSingleDraftComplete);

productionDraftRouter.put('/:id/reverse', productionSingleDraftController.updateProductionSingleDraftReverse);

export default productionDraftRouter;
