import {db} from "./dataSetup"

export const createUser = async (
    name: string, 
    nickname: string, 
    email: string
    ):Promise<void> =>{
      try {
        const id = (new Date()).getTime()
  
        await db().insert({
          id: id.toString(),
          name, 
          nickname, 
          email
        })
        .into("ToDoListUsers")
        
      } catch (error) {
        console.log(error)
      }
  }
  