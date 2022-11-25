import { ClowCards } from "../types";
import Express from "express";
import CardModel from "../models/Card";

export const getCards = async (_req: Express.Request, res: Express.Response) => {
    const cards: Array<ClowCards> = await CardModel.find();

    return res.status(200).json({
        msg: 'ok',
        data: cards
    });
}

export const getCardById = async (req: Express.Request, res: Express.Response) => {
    const { id } = req.params;
    const cardById = await CardModel.findById(id);

    return res.status(200).json({
        msg: 'ok',
        data: cardById
    });
}
