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


//exercicio 2

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


//exercicio 3
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
//exercicio 4
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
//exercicios de funções
//exercicio 1
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
//Exercicios de Objetos

//exercicio 1
/*
Objetos são como se fosse gaveta que guardasse atributos de 
um objeto da vida real, como um pokemon, guardando seu nome,
tipo, vidamaxima etc...
arrays são usados para guardar um unico atributo, ja o objeto,
pode ser guardado todos os atributos de um objeto

//exercicio 2
function criaRetangulo (lado1, lado2){
    const retangulo = {
        largura: lado1,
        altura: lado2,
        perimetro: 2 * (lado1 + lado2),
        area: lado1 * lado2
    }
    return retangulo
}

//exercicio 3
const filmeFavorito = {
    titulo: "Harry Potter",
    ano: 2007,
    diretor: "David Yates",
    atores: ["Daniel RadCliffe","Rupert Grint", "Emma Watson"]
}

console.log("Venha assistir ao filme"+filmeFavorito.titulo+
            ", de "+filmeFavorito.ano+", Dirigido por "+filmeFavorito.diretor+
            " e estrelado por "+filmeFavorito.atores)

//exercicio 4
let pessoa = {
    nome: "Nilson Issamu Kuroki",
    idade: 21,
    email: "nilsonkurokii@gmail.com",
    endereco: "Rua Onde Judas Bateu as Botas"
}

function anonimizarPessoa(objetoPessoa){
    const novoObjeto = {
        nome: "ANÔNIMO",
        idade: objetoPessoa.idade,
        email: objetoPessoa.email,
        endereco: objetoPessoa.endereco
    }
    return novoObjeto
}
*/
/*
//AULA 16
//Exercicios de funções de array

//exercicio 1
//3 Maneiras de se percorrer um vetor é através do for...of, for e while

for(let i; i>array.lenght; i++){
    condição
}
for(let numero of numeros){
    console.log(numero)
}
while(i<array.length){
    conseole.log(array[i])
    i++
}

//exercicio 2 A e B
const pessoas = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]
const adultos = pessoas.filter((pessoa, idx, arry) => {
    if(pessoa.idade >= 20){
        return true
    }
    return false
})
const criancasEAdolecentes = pessoas.filter((pessoa, index, array)=>{
    if(pessoa.idade < 20){
        return true
    }
    return false
})

//exercicio 3 A
let array = [1, 2, 3, 4, 5, 6]
array.forEach((valores, index, array)=>{
    valores = valores*2
})

//exercicio 3 B
const array = [1, 2, 3, 4, 5, 6]
array.forEach((valores, array, index)=>{
    valores = valores * 3
    valores = String(valores)
    console.log(valores)
})

//exercicio 3 C
const array = [1, 2, 3, 4, 5, 6]

array.forEach((valor, index, array)=>{
    if(valor%2 == 0){
        valor = `${valor} é par`
    }else{
        valor = `${valor} é impar`
    }
    console.log(valor)
})

//exercicio 4 a
const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]
const permissaoParaEntrar = pessoas.filter((pessoa, index, array)=>{
    if(pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade <= 60){
        return true      
    }
    return false
})

//exercicio 4 B
const semPermissaoParaEntrar = pessoas.filter((pessoa, index, array)=>{
    if(pessoa.altura < 1.5){
        return true
    }
    if( pessoa.idade > 60){
        return true   
    }
    if(pessoa.idade < 14){
        return true
    }
    return false
})

//exercicio 5

const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

const emailLembrete = consultas.map((consulta, index, array) =>{
    if(consulta.genero == "masculino"){
        consulta.genero = ["Senhor", "lembra-lo"]
    }
    if(consulta.genero == "feminino"){
        consulta.genero = ["Senhora", "lembra-la"]
    }
    return `Olá, ${consulta.genero[0]} ${consulta.nome}. Estamos enviando esta mensagem para ${consulta.genero[1]} da sua consulta no dia ${consulta.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`
})

const emailCancelamento = consultas.map((consulta, index, array) =>{
    if(consulta.genero == "masculino"){
        consulta.genero = ["Senhor", "lembra-lo"]
    }
    if(consulta.genero == "feminino"){
        consulta.genero = ["Senhora", "lembra-la"]
    }
    return `Olá, ${consulta.genero[0]} ${consulta.nome}. Infelizmente, sua consulta marcada para o dia ${consulta.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`
})

//exercicio 6

const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

contas.forEach((conta, index, array)=> {
    for(let valor of conta.compras){
        conta.saldoTotal = conta.saldoTotal - valor
    }
    console.log(conta)
})
*/

