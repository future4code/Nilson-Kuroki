let informacao = document.getElementById("informacao").value
let diaDaSemana = document.getElementById("diaDaSemana").value
let segundaFeira = document.getElementById("segunda-feira")
let tercaFeira = document.getElementById("terca-feira")
let quartaFeira = document.getElementById("quarta-feira")
let quintaFeira = document.getElementById("quinta-feira")
let sextaFeira = document.getElementById("sexta-feira")
let sabado = document.getElementById("sabado")
let domingo = document.getElementById("domingo")

function inserirCronograma(){
    if(informacao === ""){
        alert("Digite algum valor!")
    }else{
        if(diaDaSemana === "segunda-feira"){
            segundaFeira.innerHTML += "<li onclick='riscar(this)'>"+informacao+"</li>"
        }else if(diaDaSemana === "terca-feira"){
            tercaFeira.innerHTML += "<li onclick='riscar(this)'>"+informacao+"</li>"
        }else if(diaDaSemana === "quarta-feira"){
            quartaFeira.innerHTML += "<li onclick='riscar(this)'>"+informacao+"</li>"
        }else if(diaDaSemana === "quinta-feira"){
            quintaFeira.innerHTML += "<li onclick='riscar(this)'>"+informacao+"</li>"
        }else if(diaDaSemana === "sexta-feira"){
            sextaFeira.innerHTML += "<li onclick='riscar(this)'>"+informacao+"</li>"
        }else if(diaDaSemana === "sabado"){
            sabado.innerHTML += "<li onclick='riscar(this)'>"+informacao+"</li>"
        }else if(diaDaSemana === "domingo"){
            domingo.innerHTML += "<li onclick='riscar(this)'>"+informacao+"</li>"
        }
    }
}

function riscar(tudo){
    tudo.style.textDecoration = "line-through";
}