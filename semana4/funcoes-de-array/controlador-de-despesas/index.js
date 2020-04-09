
function cadastrarDespesa(functionParaTipoDaDespesa){
    let valor = document.getElementById("valor")
    const casa = document.getElementById("casa")
    const viagem = document.getElementById("viagem")
    const festas = document.getElementById("festas")
    const alimentacao = document.getElementById("alimentacao")
    let descricao = document.getElementById("descricao-despesa")
    
    let cadastroDespesas = [
        {
            valor: valor.value,
            tipoDaDespesa: functionParaTipoDaDespesa(),
            descricao: descricao.value
        }
    ]
}