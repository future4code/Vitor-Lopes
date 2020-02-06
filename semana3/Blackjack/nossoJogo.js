import comprarCarta from './naoMexer.js'
// NÃO REMOVA ESTA LINHA

/////___________BLACKJACK-SIMPLIFICADO____________/////

console.log("Bem vindo ao jogo de Blackjack!")

if (confirm("Quer iniciar uma nova rodada?")) {
  console.log("iniciando uma nova rodada:")

  const user1 = prompt("Digite seu nome")
  const carta1 = comprarCarta();
  const carta2 = comprarCarta();

  console.log(`${user1} - cartas: ${carta1.texto} ${carta2.texto} - pontuação ${carta1.valor + carta2.valor}`)

  const IA = "Computador"
  const carta1IA = comprarCarta();
  const carta2IA = comprarCarta();

  console.log(`${IA} - cartas: ${carta1IA.texto} ${carta2IA.texto} - pontuação ${carta1IA.valor + carta2IA.valor}`)

  if (carta1.valor + carta2.valor === carta1IA.valor + carta2IA.valor) {
    console.log("Empate!")
  } else if (carta1.valor + carta2.valor < carta1IA.valor + carta2IA.valor) {
    console.log("Computador Ganhou!")
  } else {
    console.log("Usuário ganhou!")

  }
} else {
  console.log("O jogo acabou =(")
}
