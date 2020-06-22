

function valores(firstNumber: number, secondNumber: number): void{

    const resultadoSoma: number = firstNumber + secondNumber 
    const resultadoSubtracao: number = firstNumber - secondNumber
    const resultadoMult: number = firstNumber * secondNumber
    const resultadoDivisao: number = firstNumber / secondNumber
    
    const resultadoFinal: string = "soma: "+ resultadoSoma 
    + " subtracao: "+ resultadoSubtracao + " divisao: "+ resultadoDivisao 
    + " multiplicao: "+ resultadoMult
    console.log(resultadoFinal)
}

console.log(valores(2,4))