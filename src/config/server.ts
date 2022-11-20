import express from 'express';
import cardsRouter from '../routes/cards';

export const server = (port: string | undefined) => {
    const app = express();

    // Middlewares
    app.use(express.json());

    // Routes
    app.use('/api/clow-cards', cardsRouter);

    app.listen(port, () => {
        console.log(`Clow reading app listening on port ${port}`);
    });
};
