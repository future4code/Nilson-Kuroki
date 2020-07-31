import { BaseDatabase } from "./BaseDatabase";
import { Band } from "../model/Band";

export class BandsDatabase extends BaseDatabase{
    private static TABLE_NAME = "LAMA_BANDS";

    public async createBand(
        id: string,
        name: string,
        music_genre: string,
        responsible: string
    ): Promise<void>{
        try {
            await this.getConnection()
            .insert({
                id,
                name,
                music_genre,
                responsible
            }).into(BandsDatabase.TABLE_NAME)
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async getTerm(term: string){
        try {
            const result = await this.getConnection()
            .select("*")
            .from(BandsDatabase.TABLE_NAME)
            .where({
                name: term
            }).orWhere({
                id: term
            })
            return result[0]
        } catch (error) {
            console.log(error)
        }
    }

}