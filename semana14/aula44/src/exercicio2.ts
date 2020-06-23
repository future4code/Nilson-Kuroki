

function valores(firstNumber: number, secondNumber: number): void{

    const resultadoSoma: number = firstNumber + secondNumber 
    const resultadoSubtracao: number = firstNumber - secondNumber
    const resultadoMult: number = firstNumber * secondNumber
    let maiorNumero: number = 0
    if(firstNumber > secondNumber){
        maiorNumero= firstNumber
    }else{
        maiorNumero = secondNumber
    }
    
    const resultadoFinal: string = "soma: "+ resultadoSoma 
    + " subtracao: "+ resultadoSubtracao + " multiplicao: "+ resultadoMult
    + "O maior é: " + maiorNumero
    console.log(resultadoFinal)
}

console.log(valores(5,4))