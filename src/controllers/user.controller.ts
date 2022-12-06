import { User } from "../../types";
import Express from "express";
import UserModel from "../models/User";
import bcryptjs from "bcryptjs"

export const createNewUser = async (req: Express.Request, res: Express.Response) => {
    const { firstName, lastName, email, password }: User = req.body;
    const user = new UserModel({ firstName, lastName, email, password });

    // Encript password
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);

    await user.save();

    return res.status(200).json({
        msg: "ok",
        data: user
    });
}