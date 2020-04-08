let blocosDePosts = {}
const arrayPost = []

const posts = document.getElementById("posts")
let variavelQualquer = ''

function postar(blocosDePosts){
    posts.innerHTML += 
        "<p>Autor: "+blocosDePosts.autor+"</p>"+
        "<h4>"+blocosDePosts.titulo+"</h4>"+
        "<p>"+blocosDePosts.texto+"</p>"+variavelQualquer
}

function novaFuncao(){
    const autor = document.getElementById("autor")
    const titulo = document.getElementById("titulo")
    const texto = document.getElementById("texto")
    blocosDePosts = {
        autor: autor.value,
        titulo: titulo.value,
        texto: texto.value
    }
    arrayPost.push(blocosDePosts)
    autor.value = ""
    titulo.value = ""
    texto.value = ""
    console.log(arrayPost)
    
}