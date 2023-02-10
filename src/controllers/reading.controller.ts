import Express from "express";
import CardModel from "../models/Card";
import { ClowCards } from '../../types';
import { controllerConstants } from "./constants";

export const getGeneralReading = async (_req: Express.Request, res: Express.Response) => {
    const cards: ClowCards[] = await CardModel.find();
    console.log(cards);

    const test = Math.  random()


    return res.json({
        msg: controllerConstants.message.success,
        result: "ok"
    });

}
