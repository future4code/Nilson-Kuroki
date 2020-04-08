let informacao = document.getElementById("informacao")
let diaDaSemana = document.getElementById("diaDaSemana")
let segundaFeira = document.getElementById("segunda-feira")
let tercaFeira = document.getElementById("terca-feira")
let quartaFeira = document.getElementById("quarta-feira")
let quintaFeira = document.getElementById("quinta-feira")
let sextaFeira = document.getElementById("sexta-feira")
let sabado = document.getElementById("sabado")
let domingo = document.getElementById("domingo")
const buttonClear = document.getElementById("button-clear")

function inserirCronograma(){
    console.log(informacao)
    if(informacao.value === ""){
        alert("Digite algum valor!")
    }else{
        if(diaDaSemana.value === "segunda-feira"){
            segundaFeira.innerHTML += "<li onclick='riscar(this)'>"+informacao.value +"</li>"
        }else if(diaDaSemana.value  === "terca-feira"){
            tercaFeira.innerHTML += "<li onclick='riscar(this)'>"+informacao.value +"</li>"
        }else if(diaDaSemana.value  === "quarta-feira"){
            quartaFeira.innerHTML += "<li onclick='riscar(this)'>"+informacao.value +"</li>"
        }else if(diaDaSemana.value  === "quinta-feira"){
            quintaFeira.innerHTML += "<li onclick='riscar(this)'>"+informacao.value +"</li>"
        }else if(diaDaSemana.value  === "sexta-feira"){
            sextaFeira.innerHTML += "<li onclick='riscar(this)'>"+informacao.value +"</li>"
        }else if(diaDaSemana.value  === "sabado"){
            sabado.innerHTML += "<li onclick='riscar(this)'>"+informacao.value +"</li>"
        }else if(diaDaSemana.value  === "domingo"){
            domingo.innerHTML += "<li onclick='riscar(this)'>"+informacao.value +"</li>"
        }
    }
    informacao.value = ""
}

function riscar(tudo){
    tudo.style.textDecoration = "line-through";
}

function limpar(){
    segundaFeira.innerHTML = ""
    tercaFeira.innerHTML = ""
    quartaFeira.innerHTML = ""
    quintaFeira.innerHTML = ""
    sextaFeira.innerHTML = ""
    sabado.innerHTML = ""
    domingo.innerHTML = ""
}