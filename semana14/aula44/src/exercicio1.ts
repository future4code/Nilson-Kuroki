const minhaString: string = 'essa e minha string'
const meuNummero: number = 23
//EXERCICIO 1
enum Cores {
    VIOLETA="violeta",
    ANIL="anil",
    AZUL="azul",
    VERDE="verde",
    AMARELO="amarelo",
    LARANJA="laranja",
    VERMELHO="vermelho"
}
type Person= {
    name: string,
    age: number, 
    colourFav: Cores
}

const nilson: Person ={
    name: 'nilson kuroki',
    age: 21,
    colourFav: Cores.LARANJA
}

const nana: Person = {
    name: 'Naiyara',
    age: 20,
    colourFav: Cores.VIOLETA
}

const gabe: Person = {
    name: 'Gabriela',
    age: 19,
    colourFav: Cores.AMARELO
}

const People: Person[] = [
    gabe, nana, nilson
]

console.log(People)