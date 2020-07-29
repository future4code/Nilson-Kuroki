export enum LOCATION {
    EUA= "EUA",
    BRAZIL = "BRAZIL"
}

export enum NATIONALITY {
    AMERICAN = "AMERICAN",
    BRAZILIAN = "BRAZILIAN"
}

export interface Casino {
    name: string,
    location: LOCATION
}

export interface User {
    name: string,
    nationality: NATIONALITY,
    age: number
}

interface Result{
    brazilians: ResultItem,
    americans: ResultItem
}

interface ResultItem {
    allowed: string[],
    unallowed: string[]
}

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