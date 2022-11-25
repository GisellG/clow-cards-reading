import { User } from "../types";
import UserModel from "../models/User";

export const getUserById = async (id: any): Promise<any> => {
    const userById: User | null = await UserModel.findById(id);

    return userById;
}

export const createNewUser = async (body: any) => {
    const newUser: any = body;
    const user = new UserModel(newUser);

    await user.save();

    return user;
}