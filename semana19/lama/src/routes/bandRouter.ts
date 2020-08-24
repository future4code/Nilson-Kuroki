import express from "express";
import {BandsController} from "../controller/BandsController"

export const bandRouter = express.Router();

const bandsController = new BandsController()


bandRouter.post("/signup", bandsController.createBand)
bandRouter.get("/search", bandsController.searchBandByIdOrName)