## AULA 63

### EXERCICIO 1

a) 
```
export interface User {
    name: string,
    balance: number
}
```
b) 
```
export function performPurchase(user: User, value: number):User | undefined{
    if(user.balance >= value){
        return{
            ...user,
            balance: user.balance - value
        }
    }
        return undefined
}
```
### EXERCICIO 2
a)
```
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
```
b)
```
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
```
c) 
```
test("o saldo deve ser menor que o valor da compra", ()=>{
        const user: User ={
            name: "susuka",
            balance: 40
        }
        const value = 50

        const result = performPurchase(user, value)

        expect(result).toEqual(undefined)
    })
```
### EXERCICIO 3
a) sem duvidas
b) 
```
export function verifyAge(casino: Casino, users: User[]): Result{
    const allowed: User[] = []
    const unallowed: User[] = []

    for(const user of users){
        if(casino.location === LOCATION.EUA){
            if(user.age >= 21){
                allowed.push(user)
            }else{
                unallowed.push(user)
            }
        }else if(casino.location === LOCATION.BRAZIL){
            if(user.age >= 18){
                allowed.push(user)
            }else{
                unallowed.push(user)
            }
        }
    }
    
    return {
        brazilians: {
            allowed: allowed
                .filter((user)=> user.nationality === NATIONALITY.BRAZILIAN )
                .map((user)=>user.name),
            unallowed: unallowed
                .filter((user)=> user.nationality === NATIONALITY.BRAZILIAN)
                .map((user)=>user.name)
        },
        americans: {
            allowed: allowed
                .filter((user)=>user.nationality === NATIONALITY.AMERICAN)
                .map((user)=>user.name)
            ,
            unallowed: unallowed
                .filter((user)=>user.nationality === NATIONALITY.AMERICAN)
                .map((user=>user.name))
        }
    }
        
}
```
c) foi dificil entender como fazer o uso das funções do array.
### EXERCICIO 4
a) 
```
test("recebe um brasileiro que pode entrar em um casino no Brasil", ()=>{
        const casino: Casino = {
            name: "casino Brasileiro",
            location: LOCATION.BRAZIL
        }
        const user: User[] = [
            {
                name: "Nilson",
                age: 21,
                nationality: NATIONALITY.BRAZILIAN
            }
        ]

        const result = verifyAge(casino, user)

        expect(result.brazilians.allowed).toEqual(["Nilson"])
    })
```
b) 
```
test("recebe um americano que pode entrar em um casino no Brasil", ()=>{
        const casino: Casino = {
            name: "casino Brasileiro",
            location: LOCATION.BRAZIL
        }
        const user: User[] = [
            {
                name: "Alfred",
                age: 19,
                nationality: NATIONALITY.AMERICAN
            }
        ]

        const result = verifyAge(casino, user)

        expect(result.americans.allowed).toEqual(["Alfred"])
    })
```
c) 
```
test("recebe dois brasileiros e dois americanos com idade de 19 anos, que querem entrar em um casino nos EUA",()=>{
        const casino: Casino = {
            name: "casino Americano",
            location: LOCATION.EUA
        }
        const user: User[] = [
            {
                name: "Alfred",
                age: 19,
                nationality: NATIONALITY.AMERICAN
            },
            {
                name: "Jake",
                age: 19,
                nationality: NATIONALITY.AMERICAN
            },
            {
                name: "João",
                age: 19,
                nationality: NATIONALITY.BRAZILIAN
            },
            {
                name: "Pedro",
                age: 19,
                nationality: NATIONALITY.BRAZILIAN
            }
        ]

        const result = verifyAge(casino, user)

        expect(result.americans.unallowed).toEqual(["Alfred", "Jake"])
        expect(result.brazilians.unallowed).toEqual(["João","Pedro"])
    })
```
d) 
```
test("recebe dois brasileiros com 19 anops e dois americanos com 21 anos que querem entrar em um casino nos EUA", ()=>{
        const casino: Casino = {
            name: "casino Americano",
            location: LOCATION.EUA
        }
        const user: User[] = [
            {
                name: "Alfred",
                age: 21,
                nationality: NATIONALITY.AMERICAN
            },
            {
                name: "Jake",
                age: 21,
                nationality: NATIONALITY.AMERICAN
            },
            {
                name: "João",
                age: 19,
                nationality: NATIONALITY.BRAZILIAN
            },
            {
                name: "Pedro",
                age: 19,
                nationality: NATIONALITY.BRAZILIAN
            }
        ]

        const result = verifyAge(casino, user)

        expect(result.americans.allowed).toEqual(["Alfred", "Jake"])
        expect(result.brazilians.unallowed).toEqual(["João","Pedro"])
    })
```


