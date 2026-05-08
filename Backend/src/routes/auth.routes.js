import { Router } from "express";
import { userRegister, login, logout, getme } from "../controllers/auth.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const authRouter = Router();

authRouter.post('/register', userRegister);
authRouter.post('/login', login);
authRouter.post('/logout', authMiddleware, logout);
authRouter.get('/get-me', authMiddleware, getme);
export default authRouter;