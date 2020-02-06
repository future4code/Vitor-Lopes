let bancoDeDados = []

function cadastrarDespesa() {
    const novoValorDespesa = document.getElementById("novoValorDespesa").value
    const seletorDespesas = document.getElementById("seletorDespesas").value
    const detalhesDespesa = document.getElementById("detalhesDespesa").value
    // const novaDespesa = document.createElement("div")
    let cadastraArray = []
    if (novoValorDespesa === "" || seletorDespesas === "" || detalhesDespesa === "") {
        alert("Favor preencher todos os campos.")
    } else {
        // novaDespesa.setAttribute("class", "novaDespesa")
        // novaDespesa.textContent = `${seletorDespesas}: ${novoValorDespesa} detalhe: ${detalhesDespesa}`

        //cria array e mostra no console
        cadastraArray = {
            Tipo: seletorDespesas,
            Valor: Number(novoValorDespesa),
            Detalhes: detalhesDespesa
        }
        console.log(cadastraArray)
        bancoDeDados = bancoDeDados.concat(cadastraArray)
    }

    document.getElementById('novoValorDespesa').value = "" //limpa os campos
    document.getElementById('seletorDespesas').value = ""
    document.getElementById('detalhesDespesa').value = ""

    console.log(cadastraArray)
    console.log(bancoDeDados)
}


function detalharDespesa() {
    const valorMaximo = document.getElementById("valorMaximo").value
    const valorMinimo = document.getElementById("valorMinimo").value

    const filtroDespesa = bancoDeDados.filter((despesa, index, array) => {
        return despesa.Tipo === "1"
    })

    // let Valor =  Array.from(filtroDespesa, ({ Valor }) => Valor);

    // const filtroValores = Valor.filter((Valor, index, array) => {
    //     if (Valor >= valorMinimo && Valor <= valorMaximo ) {
    //         return Valor
    //     }
    // })


    console.log(filtroDespesa)
    // console.log(Valor)
    // console.log(filtroValores)



}