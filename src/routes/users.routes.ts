import express from 'express';
import { createNewUser } from '../controllers/user.controller';

const router = express.Router();

// router.get('/:id/', async (req, res) => {
//     const user: User | null = await userServices.getUserById(req.params.id);

//     return user
//         ? res.send(user)
//         : res.status(404)
// });
router.post('/new-user', createNewUser);

export default router;