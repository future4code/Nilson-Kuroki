/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

let carta = comprarCarta();
let computadorTexto = []
let computadorValor = []
let usuarioTexto = []
let usuarioValor = []
let pontuacaoComputador = 0
let pontuacaoUsuario = 0

console.log("Bem vindo ao jogo de Blackjack!")
if(confirm("Quer iniciar uma nova rodada?")){
   for(let i=0; i<2; i++){
      computadorTexto.push(carta.texto)
      computadorValor.push(carta.valor)
      carta = comprarCarta()
      usuarioTexto.push(carta.texto)
      usuarioValor.push(carta.valor)
      carta = comprarCarta()
   }
   while(usuarioValor[0]=== 11 && usuarioValor[1]=== 11){
      computadorTexto.push(carta.texto)
      computadorValor.push(carta.valor)
      carta = comprarCarta()
      usuarioTexto.push(carta.texto)
      usuarioValor.push(carta.valor)
      carta = comprarCarta()
   }
   while(computadorValor[0]=== 11 && computadorValor[1]=== 11){
      computadorTexto.push(carta.texto)
      computadorValor.push(carta.valor)
      carta = comprarCarta()
      usuarioTexto.push(carta.texto)
      usuarioValor.push(carta.valor)
      carta = comprarCarta()
   }
   while(confirm(
      "Suas cartas são "+ usuarioTexto + ". A carta revelada do computador é "+computadorTexto[0]+
      "\nDeseja comprar mais uma carta?")){
         usuarioTexto.push(carta.texto)
         usuarioValor.push(carta.valor)
         
         pontuacaoUsuario = 0
         for(let valor1 of usuarioValor){
            pontuacaoUsuario += Number(valor1)
         }
         pontuacaoComputador = 0
         for(let valor2 of computadorValor){
            pontuacaoComputador += Number(valor2)
         }
         
         if(pontuacaoUsuario >= 21){
            break;
         }
   }

   while(pontuacaoComputador <= pontuacaoUsuario && pontuacaoUsuario <= 21){
      computadorTexto.push(carta.texto)
      computadorValor.push(carta.valor)
      pontuacaoUsuario = 0
      for(let valor1 of usuarioValor){
         pontuacaoUsuario += Number(valor1)
      }
      pontuacaoComputador = 0
      for(valor2 of computadorValor){
         pontuacaoComputador += Number(valor2)
      }
   }
   console.log("Usuario "+pontuacaoUsuario+"Computador"+pontuacaoComputador)
   if(pontuacaoUsuario > 21){
      alert("Suas cartas são "+usuarioTexto+". Sua pontuação é "+pontuacaoUsuario+".\n"+
      "As cartas do computador são "+computadorTexto+". A pontuação do computador é "+pontuacaoComputador+".\n"
      +"O computador ganhou!")
   }else if (pontuacaoUsuario < pontuacaoComputador && pontuacaoUsuario <= 21 && pontuacaoComputador <= 21){
      alert("Suas cartas são "+usuarioTexto+". Sua pontuação é "+pontuacaoUsuario+".\n"+
      "As cartas do computador são "+computadorTexto+". A pontuação do computador é "+pontuacaoComputador+".\n"
      +"O computador ganhou!")
   }else if(pontuacaoUsuario === 21 && pontuacaoComputador === 21){
      alert("Suas cartas são "+usuarioTexto+". Sua pontuação é "+pontuacaoUsuario+".\n"+
      "As cartas do computador são "+computadorTexto+". A pontuação do computador é "+pontuacaoComputador+".\n"
      +"Ouvi um empate!")
   }else{
      alert("Suas cartas são "+usuarioTexto+". Sua pontuação é "+pontuacaoUsuario+".\n"+
      "As cartas do computador são "+computadorTexto+". A pontuação do computador é "+pontuacaoComputador+".\n"
      +"Voce ganhou!")
   }

}else{
   console.log("O jogo acabou")   
}