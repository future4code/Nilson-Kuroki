/* exercicios de escrita de codigo
Atividade 1 de escrita de codigo
*/


// A
let F = 70
let conversorFparaK = (F- 32)*5/9 + 273.15
console.log("A. "+conversorFparaK + "°K")

//B
let C = 80
let conversorCparaF = (C)*9/5 + 32
console.log("B. "+conversorCparaF +"°F")

//C
C = 30
conversorCparaF = (C)*9/5 + 32
console.log("C. "+conversorCparaF + "°F")
F = conversorCparaF
conversorFparaK = (F- 32)*5/9 + 273.15
console.log("   "+conversorFparaK + "°K")

// D
C = prompt("Digite a temperatura em celsius")
conversorCparaF = (C)*9/5 + 32
conversorFparaK = (F- 32)*5/9 + 273.15
console.log("D. "+ conversorCparaF+ "°F, "+ conversorFparaK+"°K")


// Exercicio 2

let respostaQuestion1 = prompt("Qual o seu anime favorito?")
console.log("Qual o seu anime favorito?\nResposta: "+ respostaQuestion1)

let respostaQuestion2 = prompt("Qual o seu personagem favorito?")
console.log("Qual o seu personagem favorito?\nResposta:"+respostaQuestion2)


//3
// A
let quilowattsHora = 0.05
let consumoResidencia = 80*quilowattsHora
console.log("A residencia consumiria: R$"+ consumoResidencia)

//B
let porcentagemDesconto = 15
porcentagemDesconto = (porcentagemDesconto * consumoResidencia)/100
consumoResidencia = consumoResidencia - porcentagemDesconto
console.log("Com o desconto de 15% a residencia tem que pagar:"+ consumoResidencia)


//desafio
// 1 A
let lbemKg = 0.4536
let lbParaKg = lbemKg * 20
console.log("20lb equivalem a "+lbParaKg+"kg")
//B
let oz = 10.5
let ozParaKg = oz/35.274
console.log("10.5oz equivalem a "+ozParaKg+"kg")
//C
let mi = 100
let miParaM = mi/0.00062137
console.log("100mi equivalem a "+miParaM+"m")
//D
let ft = 50
let ftParaM = ft/3.2808
console.log("50ft equivalem a "+ftParaM+"m")
//E
let gal = 103.56
let galParaL = gal/0.26417
console.log("103.56gal equivalem a "+galParaL+"l")
//F
xicEmL = 0.24
xicParaL = xicEmL * 450
console.log("450xic equivalem a "+xicParaL+"l")
//G
oz = prompt("Conversor de onça (oz) para quilograma (kg)")
ozParaKg = oz/35.274
console.log(oz+"oz equivalem a "+ozParaKg+"kg")