import Express from "express";
import CardModel from "../models/Card";
import { ClowCards } from '../../types';
import { controllerConstants } from "./constants";

export const getCards = async (_req: Express.Request, res: Express.Response) => {
    const cards: ClowCards[] = await CardModel.find();
    const count: number = await CardModel.countDocuments();

    return res.json({
        msg: controllerConstants.message.success,
        result: cards,
        count
    });
}

export const getCardById = async (req: Express.Request, res: Express.Response) => {
    const { id } = req.params;

    // any Id from MongoDB must have 24 characters, this validates it.
    const cardById = id.length >= 24
        ? await CardModel.findById(id)
        : null

    return cardById
        ? res.status(200).json({
            msg: controllerConstants.message.success,
            resut: cardById
        })
        : res.status(404).json({
            msg: `${controllerConstants.message.notFound}: Card not found`
        })
}
