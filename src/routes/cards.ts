import express from 'express';
import * as cardService from '../services/cardService';
import { request, response } from "express";
import { ClowCards } from '../types';


const router = express.Router();

router.get('/', async (_req = request, res = response) => {
    console.log('App called from /cards at ' + new Date().toLocaleDateString());
    const data = await cardService.getCards()

    res.send(data);
});

router.get('/:id', async (req, res) => {
    const card: ClowCards = await cardService.getById(req.params.id);
    console.log(req.params.id);

    return card
        ? res.send(card)
        : res.status(404)
});

export default router;
