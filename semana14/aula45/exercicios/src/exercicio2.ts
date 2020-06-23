const operacao: string = process.argv[2]
const firstValue: number = Number(process.argv[3])
const secondValue: number = Number(process.argv[4])
let resultado: number = 0

switch(operacao){
    case "add":
        resultado = firstValue + secondValue
        break;
    case "sub":
        resultado = firstValue - secondValue
        break;
    case "mult":
        resultado = firstValue * secondValue
        break;
    case "div":
        resultado = firstValue / secondValue
        break;
}

const resposta: string = "resposta "+ resultado

console.log(resposta)