import express from 'express';
import cardsRouter from '../routes/cards.routes';
import usersRouter from '../routes/users.routes';
import { dbConnection } from '../database/config';

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use('/api/clow-cards', cardsRouter);
app.use('/api/user', usersRouter);

// Database connection
dbConnection();

export default app;
