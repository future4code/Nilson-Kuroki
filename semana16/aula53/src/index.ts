import knex from "knex";
import dotenv from "dotenv";
import express, { Request, Response } from "express"

dotenv.config();
const app = express

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

const searchActor = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM atores WHERE name = "${name}"
    `)
    console.log(result[0]) 
    return result[0]
}

//searchActor("Gloria Pires");

const countGender = async (gender: string): Promise<any> =>{
    const result = await connection.raw(
        `SELECT COUNT(*) as count FROM atores WHERE gender = "${gender}"`
    )
    console.log(result[0])
    return result[0]
}

//countGender("female")
//countGender("male")

//RECEBE UM ID E UM SALARIO E ATUALIZA UM SALARIO DE UM ATOR
const updateSalary = async (id: string, salary: number):Promise<any>=>{
    await connection("atores").update({
        salary: salary
    }).where('id',  id)
}

//updateSalary("001", 700000)

// APAGA UM ATOR BASEADO NO SEU ID
const deleteActor = async (id: string): Promise<any> =>{
    await connection("atores").where('id', id).del()
}

//deleteActor("005")

//TRAZ A MEDIA DO SALARIO DO ATORES BASEADO NO SEXO
const mediaActorById = async (gender: string): Promise<any>=>{
    const result = await connection("atores")
    .avg("salary")
    .where("gender", gender)

    console.log(result[0])
}

//mediaActorById("male")


app.get("/actor", async (req: Request, res: Response)=>{
    try {
        const gender = req.query.gender
        const count = await countGender(gender as string)

        res.status(200).send({quantity: count})
    } catch (error) {
        res.status(400).send({
            message: err.message
          });
    }
})
