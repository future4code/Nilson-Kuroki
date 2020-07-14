import {Request, Response} from "express"
import {createUser} from "../data/users"


export const createUserEndpoint = 
async (req: Request, res: Response): Promise<void> =>{
    try {
        createUser(
            req.body.name,
            req.body.nickname,
            req.body.email
        )

        res.sendStatus(200)
    } catch (error) {
        res.status(400).send({
             message: error.message
        })
    }
}