import mongoose from "mongoose";

export const dbConnection = async () => {
    const dbKey = process.env.MONGODB_CNN as string;

    try {
        const db = await mongoose.connect(dbKey);
        console.log('Database online ⭐! The DB is connected to', db.connection.name);

    } catch (error) {
        console.error(error);
        throw new Error('Error at initializing the database');
    }
};