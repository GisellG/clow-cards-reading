import express from 'express';
import { createNewUser } from '../controllers/user.controller';

const router = express.Router();

router.post('/new-user', createNewUser);

export default router;
