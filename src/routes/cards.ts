import express from 'express';
import * as cardService from '../services/cardService';

const router = express.Router();

router.get('/', (_req, res) => {
    console.log('App called from /cards at ' + new Date().toLocaleDateString());
    res.send(cardService.getCards());
});

router.get('/:id', (req, res) => {
    const card = cardService.getById(+req.params.id);

    return card
        ? res.send(card)
        : res.status(404)
});

export default router;
