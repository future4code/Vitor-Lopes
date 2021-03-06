import express from "express";
import { UserController } from "../controller/UserController";

export const userRouter = express.Router();

//SignUp
userRouter.post("/signup", new UserController().signup);
userRouter.post("/admSignup", new UserController().admSignup);
userRouter.post("/bandSignup", new UserController().bandSignup);

//Login
userRouter.post("/login", new UserController().login)

//refresh Token
userRouter.post("/refresh/token", new UserController().refreshToken);

