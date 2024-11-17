// routes/inventoryMoveDraft.route.ts

import express, { Router } from 'express';
import * as trackingController from '../controller/tracking.controller';

const trackingRouter: Router = express.Router();

// Apply validation middleware where needed
const { trackingDraftCreateValidationRules } = trackingController;

// Routes
trackingRouter.post('/', 
	trackingDraftCreateValidationRules,
	trackingController.postTrackId
);

// Endpoint untuk mengambil semua
trackingRouter.get('/', trackingController.getTrackIdList);

// Endpoint untuk mengambil berdasarkan ID
trackingRouter.get('/:id', trackingController.getTrackId);

export default trackingRouter;