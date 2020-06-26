import axios from 'axios'

const urlBase = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"

async function getAllSubscribers():Promise<any>{
    const users = await axios.get(`${urlBase}/subscribers/all`)

    return users.data
}


const main = async () =>{
    try{
        const allUsers = await getAllSubscribers()
        console.log(allUsers)
    }catch(error){

    }
}

main()