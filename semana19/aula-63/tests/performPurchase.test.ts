import {performPurchase, User} from "../src/performPurchase"

describe("testes na função performPurchase", ()=>{
    test("teste com o saldo do usuário maior que o valor da compra",()=>{
        const user: User= {
            name: "Nilson",
            balance: 20
        }
        const value = 15

        const result = performPurchase(user, value)

        expect(result).toEqual({
            ...user,
            balance: 5
        })
    } )
    test("valor do saldo do usuario deve ser o mesmo valor da compra", ()=>{
        const user: User = {
            name: "nana",
            balance: 50
        }
        const value = 50

        const result = performPurchase(user, value)
        expect(result).toEqual({
            ...user,
            balance: 0
        })
    })
    test("o saldo deve ser menor que o valor da compra", ()=>{
        const user: User ={
            name: "susuka",
            balance: 40
        }
        const value = 50

        const result = performPurchase(user, value)

        expect(result).toEqual(undefined)
    })
})

