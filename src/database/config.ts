import mongoose from "mongoose";
require('dotenv').config();

export const dbConnection = async () => {
    const dbKey = process.env.MONGODB_CNN as string;

    mongoose.connect(dbKey).
        catch(e => { throw new Error(e) });
};


