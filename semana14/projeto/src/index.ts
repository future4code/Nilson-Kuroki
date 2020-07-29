import * as fs from 'fs' //file sistem
import * as moment from 'moment'

type ExtractItem = {
    description: string,
    value: number,
    date: string
}
type Account = {
    name: string,
    cpf: string,
    birthDate: string,
    balance: number
    extract: ExtractItem[]
}
// Cadastra um usuario novo, fazendo a validação para saber se o usuario é maior de 18
const CadasterUser = (name: string, cpf: string, birthDateString: string): void =>{
    //valiodar a idade
    const birthDate = moment(birthDateString, "DD/MM/YYYY")
    const today = moment()
    const age = today.diff(birthDate, "years")

    if(age < 18){
        console.log("usuario não é maior que 18 anos")
        return;
    }
    
    const link: string = 'usuarios.json'
    const data: Buffer = fs.readFileSync(link)
    const fileConvert: string = data.toString()
    const users: Account[]= JSON.parse(fileConvert)

    //validar se tem cpf igual
    const foundUser = users.find((user: Account)=>{
        return user.cpf === cpf
    })
    if(foundUser !== undefined){
        console.log("ja existe um usuario com este cpf")
        return;
    }

    users.push({
        name: name,
        cpf: cpf,
        birthDate: birthDateString,
        balance: 0,
        extract: []
    })
    const usersStringified = JSON.stringify(users, null, 2)
    fs.writeFileSync(link, usersStringified)
}

const name: string = process.argv[2]
const cpf: string = process.argv[3]
const birthDate: string = process.argv[4]
CadasterUser(name, cpf, birthDate)
