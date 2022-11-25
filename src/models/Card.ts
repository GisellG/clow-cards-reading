import { prop, getModelForClass } from "@typegoose/typegoose";
import mongoose from "mongoose";

class Card {
    @prop()
    attribute: string

    @prop()
    guardian: string

    @prop({ type: String, required: true, default: [] })
    keywords: mongoose.Types.Array<string>;

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