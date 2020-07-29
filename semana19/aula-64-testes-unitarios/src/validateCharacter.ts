export interface Character {
    name: string;
    life: number| undefined ;
    strength: number| undefined ;
    defense: number | undefined;
}

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