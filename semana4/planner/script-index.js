function criarTarefa() {
    let item = document.getElementById('novaTarefa').value
    let day = document.getElementById('diaDaSemana').value
    let tarefaNova = document.createElement('li')

    if (item === "") {
        alert("Preencha o campo Nova Tarefa para adicionar um item.")
    } else {
        tarefaNova.setAttribute("class", "tarefa")
        tarefaNova.setAttribute("onclick", "tachado()")

        tarefaNova.textContent = item
        if (day == 'segunda') {
            document.getElementById('segunda').appendChild(tarefaNova)
        } else if (day == 'terca') {
            document.getElementById('terca').appendChild(tarefaNova)
        } else if (day == 'quarta') {
            document.getElementById('quarta').appendChild(tarefaNova)
        } else if (day == 'quinta') {
            document.getElementById('quinta').appendChild(tarefaNova)
        } else if (day == 'sexta') {
            document.getElementById('sexta').appendChild(tarefaNova)
        } else if (day == 'sabado') {
            document.getElementById('sabado').appendChild(tarefaNova)
        } else if (day == 'domingo') {
            document.getElementById('domingo').appendChild(tarefaNova)
        }
        document.getElementById('novaTarefa').value = ""
    }
}

function limparTarefa() {
    location.reload()
}

function tachado() {
    event.target.style = "text-decoration:line-through"
}