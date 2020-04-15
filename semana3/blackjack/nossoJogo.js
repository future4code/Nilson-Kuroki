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
/* 
let carta = comprarCarta();
let computador = []
let usuario = []
let pontuacaoComputador = 0
let pontuacaoUsuario = 0

console.log("Bem vindo ao jogo de Blackjack!")
if(confirm("Quer iniciar uma nova rodada?")){
   for(let i=0; i<2; i++){
      computador.push(carta.texto, carta.valor)
      carta = comprarCarta()
      usuario.push(carta.texto, carta.valor)
      carta = comprarCarta()
   }
   pontuacaoUsuario = usuario[1]+usuario[3]
   pontuacaoComputador = computador[1]+computador[3]
   console.log("Usuário - cartas: "+usuario[0],usuario[2]+" - pontuação "+pontuacaoUsuario)
   console.log("Computador - cartas: "+computador[0], computador[2]+" - pontuação "+pontuacaoComputador)
   if(pontuacaoComputador > pontuacaoUsuario){
      console.log("O computador ganhou!")
   }else if(pontuacaoUsuario > pontuacaoComputador){
      console.log("O usuario ganhou!")
   }else{
      console.log("Empate!")
   }
}else{
   console.log("O jogo acabou")   
}
*/