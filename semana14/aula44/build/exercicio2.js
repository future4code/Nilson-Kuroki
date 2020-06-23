function valores(firstNumber, secondNumber) {
    const resultadoSoma = firstNumber + secondNumber;
    const resultadoSubtracao = firstNumber - secondNumber;
    const resultadoMult = firstNumber * secondNumber;
    let maiorNumero = 0;
    if (firstNumber > secondNumber) {
        maiorNumero = firstNumber;
    }
    else {
        maiorNumero = secondNumber;
    }
    const resultadoFinal = "soma: " + resultadoSoma
        + " subtracao: " + resultadoSubtracao + " multiplicao: " + resultadoMult
        + "O maior é: " + maiorNumero;
    console.log(resultadoFinal);
}
console.log(valores(5, 4));
//# sourceMappingURL=exercicio2.js.map