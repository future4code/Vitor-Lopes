
function postar() {
    const tituloDoPost = document.getElementById("inputTitulo").value
    const autorDoPost = document.getElementById("inputAutor").value
    const conteudoDoPost = document.getElementById("inputPostagem").value
    const novaPostagem = document.createElement("div")
    let arrayDoPost = []

    if (tituloDoPost === "" || autorDoPost === "" || conteudoDoPost === "") {
        alert("Favor preencher todos os campos.")
    } else {
        novaPostagem.setAttribute("class", "novaPostagem")
        novaPostagem.textContent = `Título: ${tituloDoPost} Autor: ${autorDoPost} Diz:${conteudoDoPost}`
        document.getElementById('postagens').appendChild(novaPostagem)

        //cria array e mostra no console
        arrayDoPost = { 
            Título: tituloDoPost,
            Autor: autorDoPost,
            Post: conteudoDoPost
        }
        console.log(arrayDoPost)
    }
    document.getElementById('inputTitulo').value = "" //limpa os campos
    document.getElementById('inputAutor').value = ""
    document.getElementById('inputPostagem').value = ""

    // console.log(tituloDoPost)
    // console.log(autorDoPost)
    // console.log(conteudoDoPost)
    // console.log(novaPostagem)

}




// function criarTarefa() {
//     let item = document.getElementById('novaTarefa').value
//     let day = document.getElementById('diaDaSemana').value
//     let tarefaNova = document.createElement('li')

//     if (item === "") {
//         alert("Preencha o campo Nova Tarefa para adicionar um item.")
//     } else {
//         tarefaNova.setAttribute("class", "tarefa")
//         tarefaNova.setAttribute("onclick", "tachado()")

//         tarefaNova.textContent = item
//         if (day == 'segunda') {
//             document.getElementById('segunda').appendChild(tarefaNova)
//         } else if (day == 'terca') {
//             document.getElementById('terca').appendChild(tarefaNova)
//         } else if (day == 'quarta') {
//             document.getElementById('quarta').appendChild(tarefaNova)
//         } else if (day == 'quinta') {
//             document.getElementById('quinta').appendChild(tarefaNova)
//         } else if (day == 'sexta') {
//             document.getElementById('sexta').appendChild(tarefaNova)
//         } else if (day == 'sabado') {
//             document.getElementById('sabado').appendChild(tarefaNova)
//         } else if (day == 'domingo') {
//             document.getElementById('domingo').appendChild(tarefaNova)
//         }
//         document.getElementById('novaTarefa').value = ""
//     }
// }
