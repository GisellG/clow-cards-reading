import express from 'express';
import { getCards, getCardById } from '../controllers/card.controller';

const router = express.Router();

router.get('/', getCards);
router.get('/:id', getCardById);

export default router;
