import { Router } from 'express';
import { getLast20EntitiesByCode, getCodes } from '../controllers/cryptoController';

const router = Router();

router.get('/last/:limit/:code', getLast20EntitiesByCode); // New route to get last 20 entities

router.get('/codes', getCodes);

export default router;
