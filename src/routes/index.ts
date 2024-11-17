import { configDotenv } from 'dotenv';
import express, { Request, Response, Router } from 'express';

import authenticateToken from '../middleware/authenticateToken';
import authorizeToken from '../middleware/authorizeToken';
import inventoryMoveDraftRouter from './inventoryMoveDraft.routes';
import shipmentDraftRouter from './shipmentDraft.routes';
import trackingRouter from './tracking.routes';

const router: Router = express.Router();

configDotenv();

router.get('/', (req: Request, res: Response) => {
	res.json({ status: 'API working correctly' });
});

router.use('/inventory-move-draft', inventoryMoveDraftRouter);
router.use('/shipment-draft', shipmentDraftRouter);
router.use('/tracking', trackingRouter);

// Routes below needs authentication
router.use(authenticateToken);
router.use('/protected', (req, res) => {
	res.json(req.user);
});

// Routes below needs supervisor or admin authorization
router.use(authorizeToken(['SUPERVISOR', 'ADMIN']));
router.use('/supervisor-only', (req, res) => {
	res.json(req.user);
});

// Routes below needs admin authorization
router.use(authorizeToken(['ADMIN']));
router.use('/super-protected', (req, res) => {
	res.json(req.user);
});
export default router;