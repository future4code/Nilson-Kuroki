//AULA 14

/*leitura de codigo
exercicio 1
mostra um codigo de conversão de dinheiro de dolar para real, uma function
para receber o valorem dolar e devolver com o preço convertido em real,
aplicando a conversão

exercicio 2
um function que recebe dois paramentros que entra em um switch para escolher o tipo de investimento
e quanto quer aplicar, apos ser identificado pelo case, é feito aplicação do novo montante e o 
segundo montante sendo mostrado no console.log

exercicio 3
são declarados 3 arrays um chamado numeros que possue valores dentro e os outros dois vazios, if os
valores encontrados no vetor numero for par, essse valor será inteirado no array1, caso seja impar
será parte do array2

exercicio 4
é declarado um vetor com varios valores tipo number, mais dois valores do tipo let com os nomes de 
numero1 e numero2, apos isso entra em um laço(for) que percorre todo o vetor numeros, si o elemento
numero do vetor for menor que a variavel numero1 então numero1 recebe numero e if numero maior numero2
entao numero2 recebe numero,  apos disso é printado no console

exercicios de logica de promgramação

exercicio 1
a) false
b) false
c) true
d) true
e) false

exercicio 2

ele executa, porem nao necessariamente vai vir numeros pares, mas sim I multiplicado por 2, ate que
saia do laço.

const quantidadeDeNumerosPares 
let i = 0
let somador = 0
while(i <quantidadeDeNumerosPares){
    if(somador%2 === 0){
        console.log(somador)
        somador ++
        i++
    }else{
        somador ++
    }
}

exercicio 3
function trigonometria(a,b,c){
    if(a===b && b==c){
        return console.log("triângulo Equilátero")
    }
    if(a===b && a != c ){
        return console.log("triângulo Isóceles")
    }else if(b==c && b != a ){
        return console.log("triângulo Isóceles")
    }else if(a==c && a!==b){
        return console.log("triângulo Isóceles")
    }
    if(a !=b && b != c && a != c){
        return console.log("trinagulo Escaleno")
    }
}


exercicio 4
function saidaDeValores(valorA, valorB){
    console.log("Foi dado os valores: "+valorA+", "+valorB)

    if(valorA > valorB){
        console.log("O maior é: "+ valorA)
    }else if(valorB > valorA){
        console.log("O maior é: "+ valorB)
    }
    if(valorA % valorB === 0){
        valorA +"é divisivel por "+ valorB
    }else{
        valorA +"não é divisivel por "+ valorB
    }
    let somaAcomB = 0
    if(valorA > 0){
        somaAcomB = valorB - valorA
        console.log("A diferença entre eles é "+somaAcomB)
    }else{
        somaAcomB = valorA - valorB
        console.log("A diferença entre eles é "+somaAcomB)
    }
}
*/

//AULA 15

/*
exercicios de funções
exercicio 1
const array = [10,13,12,15,14]
function segundoMaiorESegundoMenorValor(array){
    let maiorValor = 0
    let anteriorMaiorValor = 0
    let menorValor = 0
    let anteriorMenorValor = 0
    for(let valores of array){
        if(valores > maiorValor ){
            anteriorMaiorValor = maiorValor
            maiorValor = valores   
        }else if(valores > anteriorMaiorValor){
            anteriorMaiorValor = valores
        }
    }
    menorValor = maiorValor
    for (let valores of array){
        if(valores < menorValor ){
            anteriorMenorValor = menorValor
            menorValor = valores   
        }else if(valores < anteriorMenorValor){
            anteriorMenorValor = valores
        }
    }
    return "O segundo maior valor é "+anteriorMaiorValor+" e o segundo menor valor é "+ anteriorMenorValor
}
segundoMaiorESegundoMenorValor(array)

//exercicio 2

const alerta = function(){
    alert("Hello Future4")
}
const resultado = alerta()
console.log(resultado)
*/

/*
Exercicios de Objetos

exercicio 1
Objetos são como se fosse gaveta que guardasse atributos de 
um objeto da vida real, como um pokemon, guardando seu nome,
tipo, vidamaxima etc...
arrays são usados para guardar um unico atributo, ja o objeto,
pode ser guardado todos os atributos de um objeto

exercicio 2
function criaRetangulo (lado1, lado2){
    const retangulo = {
        largura: lado1,
        altura: lado2,
        perimetro: 2 * (lado1 + lado2),
        area: lado1 * lado2
    }
    return retangulo
}

exercicio 3

*/