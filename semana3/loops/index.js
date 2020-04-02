// Exercicio 1
/* O  Codigo soma +i na variavel sum ate i valer 15, no 
total terá o total de 105 sendo mostrado no console*/
// Exercicio 2
/*
    A. o comando push adiciona mais um dado no final do array
    B. Todos os numeros divisiveis por 5 [10, 15, 25, 30]
    C. se o valor fosse 3, seria: [12, 15, 18, 21, 27, 30]
       se o valor fosse 4, seria: [12]

 */
//Exercicio 3
//const arrayOriginal = [30, 12, 45, 105, 15, 23, 10]
/* 3. A resposta

let menorNumero = arrayOriginal[0]
let maiorNumero = arrayOriginal[0]

for(let valor of arrayOriginal){
    if( valor < menorNumero){
        menorNumero = valor
    }
    if(valor > maiorNumero){
        maiorNumero = valor
    }
}
console.log("O menor valor do array é: "+ menorNumero+
        "\nO maior valor do array é: "+maiorNumero)
*/
/* 3. B resposta 
let arrayNovo = []
let numero = 10 
for(let valores of arrayOriginal){
    if(valores%numero === 0){
        arrayNovo.push(valores)
    }
}
console.log(arrayNovo)
*/
/* 3. C resposta
const arrayPar = []
for(valor of arrayOriginal){
    if(valor%2 === 0){
        arrayPar.push(valor)
    }
}
console.log(arrayPar)
 */
/* 3. D resposta
const arrayString = []
let i = 0
for(let numero of arrayOriginal){
    arrayString.push("O elemento do index "+i+" é "+numero)
    i++
}
console.log(arrayString)
*/

//DESAFIO 1
/*Teria um while para pular linha e um for para colocar um 0 a mais em cada 
linha pulada, até chegar na linha 4
*/

//DESAFIO 2
/*  
console.log("Vamos jogar!")
const numero = prompt("Digite um numero para começarmos a brincadeira!!!")
let chute = prompt("Chute um numero!")
let tentativas = 1
while(numero !== chute){
    console.log("O número chutado foi: "+ chute)
    if(chute < numero){
        console.log("Errrrrrou, é maior")
    }else if(chute > numero){
        console.log("Errrrrrou, é menor")
    }
    chute = prompt("Chute um numero!")
    tentativas ++
    
}
console.log("O numero chutado foi "+chute)
console.log("Acertou!!!")
console.log("O número de tentativas foi: "+ tentativas)*/

//DESAFIO 3
/*

Então, consegui achar como faria para deixar o valor inteiro e 
deixar ele aleatorio, porem tive dificuldade em descobrir pq ele 
não identificava o valor do meu chute como correto... depois revendo 
o codigo, descobri que esqueci de dizer que o valor inserido do chute
era number... mas consegui compreender


console.log("Vamos jogar!")
const numero = Math.round(Math.random()*100 +1)
let chute = Number(prompt("Chute um numero!"))
let tentativas = 1


while(numero !== chute){
    console.log("O número chutado foi: "+ chute)
    if(chute < numero){
        console.log("Errrrrrou, é maior")
    }else if(chute > numero){
        console.log("Errrrrrou, é menor")
    }
    chute = prompt("Chute um numero!")
    tentativas ++
    
}
console.log("O numero chutado foi "+ chute)
console.log("Acertou!!!")
console.log("O número de tentativas foi: "+ tentativas)
*/