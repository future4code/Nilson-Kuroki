import {validateCharacter} from "../src/validateCharacter"

describe("teste unitario na funcao validateCharacter", ()=>{
    
    test("teste com o name sendo vazio",()=>{
        const result = validateCharacter({
            name: "",
            life: 1500,
            strength: 1000,
            defense: 1500
        })
    
        expect(result).toEqual(false)
    })

    test("teste com um personagem de vida vazia", ()=>{
        const result = validateCharacter({
            name: "ffsafas",
            life: undefined,
            strength: 1000,
            defense: 1500
        })
    
        expect(result).toEqual(false)
    })
    
    test("teste com um personagem com a strength vazia", ()=>{
        const result = validateCharacter({
            name: "ffsafas",
            life: 1000,
            strength: undefined,
            defense: 1500
        })
    
        expect(result).toEqual(false)
    })

    test("teste com um personagem com a defesa vazia", ()=>{
        const result = validateCharacter({
            name: "ffsafas",
            life: 1000,
            strength: 1500 ,
            defense: undefined
        })
    
        expect(result).toEqual(false)
    })

    test("teste com um personagem com a defende vazia", ()=>{
        const result = validateCharacter({
            name: "ffsafas",
            life: -1000,
            strength: 1500 ,
            defense: 1000
        })
    
        expect(result).toEqual(false)
    })

    test("teste com um personagem com a defende vazia", ()=>{
        const result = validateCharacter({
            name: "ffsafas",
            life: 0,
            strength: 1500 ,
            defense: 1000
        })
    
        expect(result).toEqual(true)
    })

    test("teste com um personagem com a defende vazia", ()=>{
        const result = validateCharacter({
            name: "ffsafas",
            life: 1500,
            strength: 1500 ,
            defense: 1000
        })
    
        expect(result).toEqual(true)
    })

})