import comprarCarta from './naoMexer.js'
// NÃO REMOVA ESTA LINHA

/////___________BLACKJACK-COMPLETO____________/////

console.log("Bem vindo ao jogo de Blackjack!")

if (confirm("Quer iniciar uma nova rodada?")) {
    const user1 = "usuario" // prompt("Digite seu nome")
    let cartasUsuario = []
    let usuarioNomes
    let IAnomes
    let cartaIA = []
    let usuarioValor = 0
    let IAValor = 0
    let ok
    let icarta = 0

    function teste(params) {
        usuarioNomes = Array.from(cartasUsuario, ({ texto }) => texto)
        IAnomes = Array.from(cartaIA, ({ texto }) => texto)
    }

    //Cartas usuário
    while (icarta < 2) {
        cartasUsuario.push(comprarCarta())
        icarta++
    }

    //Cartas computador
    icarta = 0
    while (icarta < 2) {
        cartaIA.push(comprarCarta())
        icarta++
    }
    somaUsuario()
    somaIA()

    // Usuário - Soma do valor das cartas
    function somaUsuario() {
        for (let i = 0; i < cartasUsuario.length; i++) {
            usuarioValor += cartasUsuario[i].valor
            teste()
        }
    }

    // Computador - Soma do valor das cartas
    function somaIA() {
        for (let i = 0; i < cartaIA.length; i++) {
            IAValor += cartaIA[i].valor
            // teste()
        }
    }

    console.log(`${user1} - cartas: ${usuarioNomes} - pontuação ${usuarioValor}`)
    console.log(`Computador - cartas: ${IAnomes} - pontuação ${IAValor}`)

    //função para comprar cartas do usuário
    function compraCartaUsuario() {
        cartasUsuario.push(comprarCarta())
        teste()
        usuarioValor = 0
        somaUsuario()
    }
    //função para comprar cartas do computador
    function comprarcartaIA() {
        cartaIA.push(comprarCarta())
        teste()
        IAValor = 0
        somaIA()
    }

    //Comprar cartas confirm - Usuário
    do {
        if (confirm(`Suas cartas são ${usuarioNomes}. A carta revelada do computador é ${cartaIA[0].texto}
    \nDeseja comprar mais uma carta?`)) {
            compraCartaUsuario()
            ok = true
        } else {
            ok = false
        }
    } while (ok == true && usuarioValor < 21);
    while (IAValor < usuarioValor && IAValor < 21) {
        comprarcartaIA()
    }

    console.log(`Final - Usuário cartas = ${usuarioNomes} valor ${usuarioValor}`)
    console.log(`Final - Computador cartas = ${IAnomes} valor ${IAValor}`)

    // Condição de vitória
    if (usuarioValor === IAValor) {
        console.log("EMPATE!")
        alert(`EMPATE!") \nPontos: ${user1} = ${usuarioValor} \nComputador = ${IAValor}`)
    } else if (IAValor > 21) {
        console.log("Computador ultrapassou 21 pontos. Usuário ganhou!")
        alert(`Computador ultrapassou 21 pontos. Usuário ganhou! \nPontos: ${user1} = ${usuarioValor} \nComputador = ${IAValor}`)
    } else if (usuarioValor > 21) {
        console.log("Usuário ultrapassou 21 pontos. Computador ganhou!")
        alert(`Usuário ultrapassou 21 pontos. Computador ganhou! \nPontos: ${user1} = ${usuarioValor} \nComputador = ${IAValor}`)
    } else if (usuarioValor < IAValor) {
        console.log("Computador Ganhou!")
        alert(`Computador Ganhou! \nPontos: ${user1} = ${usuarioValor} \nComputador = ${IAValor}`)
    } else if (usuarioValor > IAValor) {
        console.log("Usuário ganhou!")
        alert(`Usuário Ganhou! \nPontos: ${user1} = ${usuarioValor} \nComputador = ${IAValor}`)
    } else {
        console.log("O jogo acabou =(")
        alert(`O jogo acabou =(`)
    }
}

