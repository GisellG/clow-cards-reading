import express from 'express';
import { getCards, getCardById } from '../controllers/card.controller';
import { getGeneralReading } from '../controllers/reading.controller';

const router = express.Router();

router.get('/', getCards);
router.get('/:id', getCardById);

router.get('/reading/general', getGeneralReading);

export default router;
