import express from 'express';
import * as userServices from '../controllers/user.controller';
import { User } from '../types';


const router = express.Router();

router.get('/:id/', async (req, res) => {
    const user: User | null = await userServices.getUserById(req.params.id);

    return user
        ? res.send(user)
        : res.status(404)
});

router.post('/new-user/', async (req, res) => {
    const newUser = await userServices.createNewUser(req.body);

    return res.send(newUser);
});

export default router;