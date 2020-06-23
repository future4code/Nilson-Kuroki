const funcaoArray = (arrayNumber) => {
    const qtdValoresArray = array.length;
    let qtdImpar = 0;
    let somaArray = 0;
    for (var i = 0; i < qtdValoresArray; i++) {
        if (arrayNumber[i] % 2 !== 0) {
            qtdImpar = qtdImpar + 1;
        }
    }
    for (var i = 0; i < qtdValoresArray; i++) {
        somaArray = somaArray + arrayNumber[i];
    }
    return { qtdValoresArray, qtdImpar, somaArray };
};
const array = [1, 2, 3, 4, 5, 5];
console.log(funcaoArray(array));
//# sourceMappingURL=exercicio3.js.map