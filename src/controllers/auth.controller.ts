import Express from "express";
import UserModel from "../models/User";
import bcryptjs from 'bcryptjs';
import { User } from "../../types";
import { generateJwt } from '../helpers/get-jwt';

export const login = async (req: Express.Request, res: Express.Response) => {
    const { mail, password } = req.body;

    // Find mail
    const userFromDb: User | any = await UserModel.findOne({ mail });

    // Password matches
    const validPassword = bcryptjs.compareSync(password, userFromDb?.password);

    // JWT
    const token = await generateJwt(userFromDb._id);

    console.log(validPassword, token);

    return res.json({
        msg: "Login Ok",
        data: userFromDb
    })
};
