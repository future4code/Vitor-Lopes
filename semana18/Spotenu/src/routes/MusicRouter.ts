import express from "express";
import { MusicController } from "../controller/MusicController";

export const musicRouter = express.Router();

//SignUp
musicRouter.get("/bandlist", new MusicController().bandList);
musicRouter.put("/band/aprove", new MusicController().bandApprove);
//Add new music genre
musicRouter.put("/band/add-new-genre", new MusicController().addNewGenre);
