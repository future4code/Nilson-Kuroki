/*Exercicio 1 
    Neste código se pede para o usuário digitar um numero para teste
    e ele é armazenado em outra variavel convertendo seu tipo string 
    para number, depois disso ele é passado em um if para saber se o
    resto é igual a 0, se não for ele entra em um else dizendo que não
    passou no teste e se for igual ele permanece no primeiro if e diz 
    que passou no teste

*/

/*Exercicio 2
    A. O codigo serve para identificar a fruta e seu preço
    B. Se for Maçâ apareça o preço de 2,25
    C. Eu pagaria 24,55
    D. apareceria "O preço da fruta, Pêra, é R$ 5"
*/

/*Exercicio 3
    acarretaria em um erro pois a variavel mensagem não foi declarada
    no lugar onde o if possa encontrar, o jeito certo é declarar a
    variavel mensagem antes de entrar no if.

*/

//Exercicio 4
/* 
let valor1 = prompt("Digite o primeiro numero(nao repita os mesmo numeros):")
let valor2 = prompt("Digite o segundo numero(nao repita os mesmos numeros): ")
let valor3 = prompt("Digite o terceiro numero(não repita os mesmo numeros): ")
*/
/*  A. Com dois valores, o código não mostra nada, ele entra 
    e sai do if sem identificar nenhuma ordem 
    B. Com tres valores, o código entra no if e sai logo em seguida
    sem mostrar nada, porem executa
    C. Impedido!
    */
/*
if(valor1 < valor2 && valor2 < valor3){
    console.log(valor3+", "+valor2 +", "+valor1)
    }else if(valor3 < valor2 && valor2 < valor1){
        console.log(valor1+", "+valor2+", "+valor3)
        }else if(valor2 > valor3 && valor2 > valor1){
            console.log(valor2+", "+valor3+", "+valor1)
            }else if(valor2 < valor3 && valor2 < valor1){
                console.log(valor3+", "+valor1+", "+valor2)
                }else if(valor1 === valor2 && valor2 === valor3){
                    console.log("Por favor, não digite o mesmo numero!")
                }
                */
//Exercicio 5
/*
const ossos = prompt("Possui ossos no seu esqueleto?[s/n]")
if(ossos === "s"){
    console.log("É um animal vertebrado e")
    const pelos = prompt("Possui pelos?[s/n]")
    if(pelos === "s"){
        const racional = prompt("É um animal racional?[s/n]")
        if(racional === "s") {
            console.log("Ser humano")
        }else if(racional === "n"){
            console.log("Mamífero não humano")
        }
    }else if(pelos === "n"){
        const penas = prompt("Possui penas?")
        if(penas === "s"){
            console.log("Ave")
        }else if(penas === "n"){
            const terrestre = prompt("É um animal terrestre?[s/n]")
            if(terrestre === "n"){
                console.log("Peixe")
            }else if(terrestre === "s"){
                const viveuNaAgua = prompt("Viveu parte da vida na agua?[s/n]")
                if(viveuNaAgua === "s"){
                    console.log("Anfíbio")
                }else if(viveuNaAgua === "n"){
                    console.log("Réptil")
                }
            }
        }
    }
}else{
    console.log("Vertebrado")
}
*/

//DESAFIO

const nomeCompleto = prompt("Digite seu nome completo!")
let typeGame = prompt("Jogo internacional(IN) ou doméstico(DO)?[IN/DO]")
const stageGame = prompt("semi-final(SF), decisão de terceiro lugar(DT) ou final(FI)?")
const category = prompt("opções: 1, 2, 3 e 4")
const quantityTickets = Number(prompt("Quantos ingressos?"))
let valorTickets = 0
if(typeGame === "Doméstico"|| typeGame === "DO"){
    if(stageGame === "semi-final"|| stageGame === "SF" ){
        if(category === "1"){
            valorTickets = 1320.00
        }else if(category === "2"){
            valorTickets = 880.00
        }else if(category === "3"){
            valorTickets = 550.00
        }else if(category === "4"){
            valorTickets = 220.00
        }
    }else if(stageGame === "DT"){
        if(category === "1"){
            valorTickets = 660.00
        }else if(category === "2"){
            valorTickets = 440.00
        }else if(category === "3"){
            valorTickets = 330.00
        }else if(category === "4"){
            valorTickets = 170.00
        }
    }else if(stageGame === "FI" || stageGame === "Final"){
        if(category === "1"){
            valorTickets = 1980.00
        }else if(category === "2"){
            valorTickets = 1320.00
        }else if(category === "3"){
            valorTickets = 880.00
        }else if(category === "4"){
            valorTickets = 330.00
        }
    }
}else if(typeGame === "Internacional" || typeGame === "IN"){
    console.log("Indisponivel")
}
if(typeGame === "DO"){
    typeGame = "Doméstico"
}
if(typeGame === "IN"){
    typeGame = "Internacional"
    valorTickets = 666
}

console.log(
    "---Dados da compra---\nNome do cliente: "+nomeCompleto+
    "\nTipo do jogo:"+ typeGame +
    "\nCategoria: "+ category+
    "\nQuantidade de Ingressos: "+quantityTickets+" ingressos\n---Valores---\nValor do ingresso: R$ "
    +valorTickets+
    "\nvalor total: R$ ", quantityTickets*valorTickets)
