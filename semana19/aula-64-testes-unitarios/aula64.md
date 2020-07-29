## aula 64
### EXERCICIO 1
a) 
```
export interface Character {
    name: string;
    life: number| undefined ;
    strength: number| undefined ;
    defense: number | undefined;
}
```
b)
```
export function validateCharacter(input: Character): boolean{
    if(
    !input.name || 
    input.life === undefined || 
    input.defense === undefined || 
    input.strength === undefined
    ){
        return false   
    }

    if(input.defense < 0 || input.life < 0 || input.strength < 0){
        return false
    }

    return true
}
```
### EXERCICIO 2
a) 
```
test("teste com o name sendo vazio",()=>{
        const result = validateCharacter({
            name: "",
            life: 1500,
            strength: 1000,
            defense: 1500
        })
    
        expect(result).toEqual(false)
    })
```
b)
```
test("teste com um personagem de vida vazia", ()=>{
        const result = validateCharacter({
            name: "ffsafas",
            life: undefined,
            strength: 1000,
            defense: 1500
        })
    
        expect(result).toEqual(false)
    })
```
c) 
```
 test("teste com um personagem com a strength vazia", ()=>{
        const result = validateCharacter({
            name: "ffsafas",
            life: 1000,
            strength: undefined,
            defense: 1500
        })
    
        expect(result).toEqual(false)
    })
```
d) 
```
test("teste com um personagem com a defesa vazia", ()=>{
        const result = validateCharacter({
            name: "ffsafas",
            life: 1000,
            strength: 1500 ,
            defense: undefined
        })
    
        expect(result).toEqual(false)
    })
```
e) 
```
test("teste com um personagem com a defende vazia", ()=>{
        const result = validateCharacter({
            name: "ffsafas",
            life: -1000,
            strength: 1500 ,
            defense: 1000
        })
    
        expect(result).toEqual(false)
    })
```
f) 
```
test("teste com um personagem com a defende vazia", ()=>{
        const result = validateCharacter({
            name: "ffsafas",
            life: 0,
            strength: 1500 ,
            defense: 1000
        })
    
        expect(result).toEqual(true)
    })
```
g) 
```
 test("teste com um personagem com a defende vazia", ()=>{
        const result = validateCharacter({
            name: "ffsafas",
            life: 1500,
            strength: 1500 ,
            defense: 1000
        })
    
        expect(result).toEqual(true)
    })
```
