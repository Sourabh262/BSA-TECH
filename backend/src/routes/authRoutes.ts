import express from 'express';
import { loginUser, registerUser, changePassword } from '../controllers/authController';

const router = express.Router();

router.post('/login', loginUser);
router.post('/register', registerUser);
router.put('/change-password', changePassword);

export default router;
