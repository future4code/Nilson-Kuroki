import {Client} from "./Client"
import {Place} from './Place'
import {Residence} from './Residence'
import {Commerce} from './Commerce'
import {Industry} from './Industry'

const client: Client = {
    name: "nilson",
    registrationNumber: 123456,
    consumedEnergy: 20,

    calculateBill: ()=>{
        return 2
    }
}

//console.log(client)

/**
 * exercicio 1
 * 
 * a. consegui imprimir todos as propriedades, menos a função, que retorna [function: calculateBill] ao invés do valor
 * 
 * exercicio 2
 * 
 * a. não é possivel fazer uma nova instância a partir de uma classe abstrata, ela não permite que se faça
 * 
 *                      const place: Place = new Place("64464-54")
 * 
 * exercicio 3
 * 
 * 1. Devido ao polimorfismo, uma classe filha é do mesmo tipo da classe pai, ou seja, a classe Residence(e as outras duas)
 * tambem são do tipo place e delas podem ser criadas instâncias, ja que elas não são abstracts
 * 
 * 2. A Place não é uma interface, devido o fato de uma interface ter seus atributos public e não é isso que queremos,
 * queremos poder proteger com private ou 
 * 
 */

 const residencia: Residence = new Residence(3,"cep Residence")
 const comercio: Commerce = new Commerce(5, "cep Commerce")
 const industria: Industry = new Industry(10, "cep Industry")

 console.log(residencia.getCep())
 console.log(comercio.getCep())
 console.log(industria.getCep())