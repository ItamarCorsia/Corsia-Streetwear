import express from 'express';
import { loginUser, registerUser, adminLogin } from '../controllers/userController.js';

const userRouter = express.Router();

// User Registration Route
userRouter.post('/register', registerUser);

// User Login Route
userRouter.post('/login', loginUser);

// Admin Login Route
userRouter.post('/admin', adminLogin);

export default userRouter;
