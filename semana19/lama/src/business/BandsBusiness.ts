import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { BandsDatabase } from "../data/BandsDatabase"
import {BandData} from "../model/Band"

export class BandsBusiness {
    constructor(
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private bandsDatabase: BandsDatabase,
        private authenticator: Authenticator
    ){}

    async createBands(band: BandData){
        const authentication = this.authenticator.getData(band.token)

        if(authentication.role !== "ADMIN"){
            throw new Error("you don't is a administratorr")
        }

        const id = this.idGenerator.generate()

        await this.bandsDatabase.createBand(
            id,
            band.name,
            band.music_genre,
            band.responsible
        )
    }

    async searchBandByIdOrName(term: string): Promise<any>{

            const band = await this.bandsDatabase.getTerm(term)
            return({
                id: band.id,
                name: band.name,
                music_genre: band.music_genre,
                responsible: band.responsible
            })
    }
}