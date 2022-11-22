import express from 'express';
import cardsRouter from '../routes/cards';
import { dbConnection } from './database';
// import CardModel from '../models/Card';

export const server = (port: string | undefined) => {
    const app = express();

    // Middlewares
    app.use(express.json());

    // Routes
    app.use('/api/clow-cards', cardsRouter);

    // Database connection
    dbConnection();

    app.listen(port, () => {
        console.log(`Clow reading app listening on port ${port}`);
    });
};
