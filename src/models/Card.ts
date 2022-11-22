import { prop, getModelForClass } from "@typegoose/typegoose";
import { Mixed, ObjectId } from "mongoose";

class Card {
    @prop()
    attribute: string

    @prop()
    guardian: string

    @prop()
    id: ObjectId

    @prop()
    keywords: Mixed

    @prop()
    meaning: string

    @prop()
    message: string

    @prop()
    name: string

    @prop()
    tarotSubstitute: string

    @prop()
    warning: string
}

const CardModel = getModelForClass(Card);
export default CardModel;