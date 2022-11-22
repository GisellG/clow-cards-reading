import { ClowCards } from "../types";
import CardModel from "../models/Card";

export const getCards = async (): Promise<any> => {
    const cards: Array<ClowCards> = await CardModel.find();
    return cards
}

export const getById = async (id: any): Promise<any> => {
    const cardById = await CardModel.findById(id);
    return cardById;
}