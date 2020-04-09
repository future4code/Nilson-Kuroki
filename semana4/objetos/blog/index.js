let blocosDePosts = {}
const arrayPost = []

function armazenar(){
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
    postar(blocosDePosts)
}

function postar(blocosDePosts){
    let posts = document.getElementById("posts")
    let variavelQualquer = posts.innerHTML
    posts.innerHTML = 
        "<p>Autor: "+blocosDePosts.autor+"</p>"+
        "<h4>"+blocosDePosts.titulo+"</h4>"+
        "<p class='comentario'>"+blocosDePosts.texto+"</p>"+
        variavelQualquer
}