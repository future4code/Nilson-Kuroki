const funcaoArray: 
    (arrayNumber: number[]) =>
    {qtdValoresArray: number, qtdImpar: number, somaArray: number} = 
    (arrayNumber: number[]): {qtdValoresArray: number, qtdImpar: number, somaArray: number} =>{
        const qtdValoresArray: number = array.length
        let qtdImpar: number = 0
        let somaArray: number = 0

        for(var i: number = 0; i < qtdValoresArray; i++){
            
            if(arrayNumber[i]%2 !== 0){
                qtdImpar = qtdImpar +1
            }
        }
        for(var i: number = 0; i < qtdValoresArray; i++){
            somaArray = somaArray + arrayNumber[i]
            
        }
        return {qtdValoresArray, qtdImpar, somaArray}
    }

    const array: number[] = [1,2,3,4,5,5]

    console.log(funcaoArray(array))