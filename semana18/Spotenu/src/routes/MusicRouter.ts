import express from "express";
import { MusicController } from "../controller/MusicController";

export const musicRouter = express.Router();

//Band
musicRouter.get("/bandlist", new MusicController().bandList);
musicRouter.put("/band/aprove", new MusicController().bandApprove);
//Music genre
musicRouter.put("/band/add-new-genre", new MusicController().addNewGenre);
musicRouter.get("/band/genres", new MusicController().getAllGenres);
