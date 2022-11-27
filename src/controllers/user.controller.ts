import { User } from "../../types";
import Express from "express";
import UserModel from "../models/User";

export const createNewUser = async (req: Express.Request, res: Express.Response) => {
    const newUser: User = req.body;
    const user = new UserModel(newUser);

    await user.save();

    return res.status(200).json({
        msg: "ok",
        data: user
    });
}