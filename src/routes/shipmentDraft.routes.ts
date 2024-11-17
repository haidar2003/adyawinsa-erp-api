// routes/shipmentDraft.route.ts

import express, { Router } from 'express';
import * as shipmentDraftController from '../controller/shipmentDraft.controller';

const shipmentDraftRouter: Router = express.Router();

const {
  shipmentDraftCreateValidationRules,
  shipmentDraftUpdateValidationRules,
} = shipmentDraftController;

shipmentDraftRouter.post(
  '/',
  shipmentDraftCreateValidationRules,
  shipmentDraftController.createShipmentDraft
);

shipmentDraftRouter.get(
  '/',
  shipmentDraftController.getShipmentDraftAll
);

shipmentDraftRouter.get(
  '/:id',
  shipmentDraftController.getShipmentDraft
);

shipmentDraftRouter.put(
  '/:id',
  shipmentDraftUpdateValidationRules,
  shipmentDraftController.updateShipmentDraftRegular
);

shipmentDraftRouter.put(
  '/:id/complete',
  shipmentDraftController.updateShipmentDraftComplete
);

shipmentDraftRouter.put(
  '/:id/reverse',
  shipmentDraftController.updateShipmentDraftReverse
);

shipmentDraftRouter.delete(
  '/',
  shipmentDraftController.deleteShipmentDraft
);

export default shipmentDraftRouter;
