import {Request, Response} from "express"
import { BandsBusiness } from "../business/BandsBusiness"
import { BandData } from "../model/Band"
import { BaseDatabase } from "../data/BaseDatabase"
import { BandsDatabase } from "../data/BandsDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";

export class BandsController {

    private static BandsBusiness = new BandsBusiness(
        new IdGenerator(),
        new HashManager(),
        new BandsDatabase(),
        new Authenticator()
    )

    async createBand(req: Request, res: Response){        
        try {
            const bandData: BandData = {
                name: req.body.name,
                music_genre: req.body.music_genre,
                responsible: req.body.responsible,
                token: req.headers.authorization as string
            }
    
            await BandsController.BandsBusiness.createBands(bandData)

            res.status(200).send("band successfully created")
        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    async searchBandByIdOrName(req: Request, res: Response){
        try {
            const term = req.query.term

            const result = await BandsController.BandsBusiness.searchBandByIdOrName(term as string)

            res.status(200).send({
                id: result.id,
                name: result.name,
                music_genre: result.music_genre,
                responsible: result.responsible
            })
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }
}