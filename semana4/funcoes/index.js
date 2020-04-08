/* exercicio 1
    A. O array não receberá nenhum valor
    B. o array receberá os valores [0, 1, 0, 1, 2, 3]
    C. o array receberá os valores [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]
*/

/* exercicio 2
    A. os tres consoles, mostra a posição que o usuário esta na lista, no caso
    do primeiro, ele esta no indice 0, no segundo, ele esta no indice 2 e no
    terceiro, ele não se encontra na lista, então é devolvido o valor undefined

    B. Funcionaria, pois ele verifica se o que esta na posição da lista é igual
    com o dado guardado nela 
 */

/* Exercicio 3
    Função poderia ter um nome melhor, como, criandoArray
    com os dados que o usuario passar em forma de numero, será possivel encher
    o arrayFinal com dois valores, um com a soma de todo o array e o
    outro valor com a multiplicação de todo o array
*/

//exercicio 4 A
/*
function conversaoAnoCachorro(anoCachorro){
    let anoHumano = anoCachorro * 7
    return anoHumano
}

console.log(conversaoAnoCachorro(4))
*/
//Exercicio 4 B
/* 
function infoPessoas(nome, idade, endereco, estudante){

    if(estudante === true){
        estudante = "sou"
    }else{
        estudante = "não sou"
    }
    console.log("Eu sou "+nome+", tenho "+idade+", o endereço "+endereco+" e "+estudante+" estudante")
}
infoPessoas("Nilson", 22, "Rua Onde Judas Perdeu a Bota", true)
*/
//exercicio 5
/* 
function seculo(ano){

        if(ano >1000 && ano <= 1100){
        return "O ano "+ano+" pertence ao século XI"
        }else if(ano > 1100 && ano <=1200){
            return"O ano "+ano+" pertence ao século XII"
        }else if(ano > 1200 && ano <=1300){
            return "O ano "+ano+" pertence ao século XIII"
        }else if(ano > 1300 && ano <=1400){
            return "O ano "+ano+" pertence ao século XIV"
        }else if(ano > 1400 && ano <=1500){
            return "O ano "+ano+" pertence ao século XV"
        }else if(ano > 1500 && ano <=1600){
            return "O ano "+ano+" pertence ao século XVI"
        }else if(ano > 1600 && ano <=1700){
            return "O ano "+ano+" pertence ao século XVII"
        }else if(ano > 1700 && ano <=1800){
            return "O ano "+ano+" pertence ao século XVIII"
        }else if(ano > 1800 && ano <=1900){
            return "O ano "+ano+" pertence ao século XIX"
        }else if(ano > 1900 && ano <=2000){
            return "O ano "+ano+" pertence ao século XX"
        }else if(ano > 2000 && ano <=2100){
            return "O ano "+ano+" pertence ao século XXI"
        }    

}
console.log(seculo(1200))
*/
//Exercicio 6
// A
/* 
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function quantidadeElemento(lista){
    let qtd = 0
    for(elemento of lista){
        qtd += 1
    }
    return qtd
}
console.log(quantidadeElemento(array))
*/
// exercicio 6 B
/* 
function numeroPar(numero){
    let par
    if(numero%2 === 0){
        par = true
        return par
    }else if(numero%2 === 1){
        par = false
        return par 
    }
}
console.log(numeroPar(15))
*/
// Exercicio 6 C
/* 
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
function parOuImpar(lista){
    let qtd = 0
    for(elementos of lista){
        if(elementos%2 === 0){
            qtd += 1
        }
    }
    return qtd
}
console.log(parOuImpar(array))
*/

//exercicio 6 D
/* 
function numeroPar(numero){
    let par
    if(numero%2 === 0){
        par = true
        return par
    }else if(numero%2 === 1){
        par = false
        return par 
    }
}
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
function parOuImpar(lista){
    let qtd = 0
    for(elementos of lista){
        if(numeroPar(elementos) === true){
            qtd += 1
        }
    }
    return qtd
}
console.log(parOuImpar(array))
*/
