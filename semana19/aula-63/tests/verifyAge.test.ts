import {verifyAge, Casino, User, LOCATION, NATIONALITY} from "../src/verifyAge"

describe("testes realizados na função verifyAge", ()=>{
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
    
})