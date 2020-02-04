/////////////EXERCÍCIO DE ESCRITA DE CÓDIGO/////////////
///////////___________EXERCÍCIO 1____________///////////

// a- []
// b- [0, 1, 0, 1, 2, 3]
// c- [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]

///////////___________EXERCÍCIO 2____________///////////

// a- 0 
//    2 
//    undefined pois "paula" não foi definido
// b- funcionaria mas precisaria modificar o console.log tb
// obs: como não sei se entendi muito bem o enunciado, fiz o exemplo aqui embaixo

// let arrayDeNomes = [1, 2, 3, 4, 5];

// const funcao = (lista, nome) => {
//   for (let i = 0; i < lista.length; i++) {
//     if (lista[i] === nome) {
//       return i;
//     }
//   }
// };

// console.log(funcao(arrayDeNomes, 1));
// console.log(funcao(arrayDeNomes, 3));
// console.log(funcao(arrayDeNomes, "Paula"));

///////////___________EXERCÍCIO 3____________///////////

// function acrescentaResultado(array)

/////////////EXERCÍCIO DE LEITURA DE CÓDIGO/////////////
///////////___________EXERCÍCIO 4____________///////////

// a- 
// function converteAnos(numero){
//     anosCao = numero * 7
//     return anosCao
// }
// let anosHumano = prompt("Digite sua idade para converte-la para o equivalente canino1")
// document.write(`Você tem ${anosHumano} anos. Se fosse um cão, teria ${converteAnos(anosHumano)} anos.`)

// b-
// function informacao() {
//     let nome = prompt("Seu nome")
//     let idade = +prompt("idade")
//     let endereco = prompt("endereço")
//     let estudante = confirm("Você é estudante?")
//     if (estudante == true) {
//         estudante = "sou"
//       } else {
//         estudante = "não sou"
//       }
//     document.write(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e ${estudante} estudante.`)
// }
// informacao()

///////////___________EXERCÍCIO 5____________///////////

//  eu optei por utilizar if else ao inves de case pois acabei de ler
//  um teste no stackoverflow que fala sobre performance ao utilizar if,
//  switch case, etc em navegadores e provou que o uso simples de if é o mais rápido dentre os demais
//  link: https://stackoverflow.com/questions/6665997/switch-statement-for-greater-than-less-than 

// function verificarAnos() {
//     let anoPrompt = prompt("Digite um ano entre 1000 e 20100 para saber a qual século ele pertence:")
//     if (anoPrompt == 1000) { alert(`O ano ${anoPrompt} pertence ao século X`)}
//     if (anoPrompt > 1000 && anoPrompt < 1100) { alert(`O ano ${anoPrompt} pertence ao século XI`)}
//     if (anoPrompt > 1100 && anoPrompt < 1200) { alert(`O ano ${anoPrompt} pertence ao século XII`)}
//     if (anoPrompt > 1200 && anoPrompt < 1300) { alert(`O ano ${anoPrompt} pertence ao século XIII`)}
//     if (anoPrompt > 1300 && anoPrompt < 1400) { alert(`O ano ${anoPrompt} pertence ao século XIV`)}
//     if (anoPrompt > 1400 && anoPrompt < 1500) { alert(`O ano ${anoPrompt} pertence ao século XV`)}
//     if (anoPrompt > 1500 && anoPrompt < 1600) { alert(`O ano ${anoPrompt} pertence ao século XVI`)}
//     if (anoPrompt > 1600 && anoPrompt < 1700) { alert(`O ano ${anoPrompt} pertence ao século XVII`)}
//     if (anoPrompt > 1700 && anoPrompt < 1800) { alert(`O ano ${anoPrompt} pertence ao século XVIII`)}
//     if (anoPrompt > 1800 && anoPrompt < 1900) { alert(`O ano ${anoPrompt} pertence ao século XIX`)}
//     if (anoPrompt > 1900 && anoPrompt < 2000) { alert(`O ano ${anoPrompt} pertence ao século XX`)}
//     if (anoPrompt > 2000 && anoPrompt < 2100) { alert(`O ano ${anoPrompt} pertence ao século XXI`)}
// }
// verificarAnos()

///////////___________EXERCÍCIO 6____________///////////

// a-
// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// function devolveQuantidadeElementos() {
//     let quantidadeElementos = array.length
//     console.log(quantidadeElementos)
// }
// devolveQuantidadeElementos()

// b-
// function retornaParidade() {
//     let paridade = prompt("Digite um número para saber se é par ou ímpar:")
//     if (paridade % 2 == 0) {
//         console.log(`${paridade} é par!`)
//     } else {
//         console.log(`${paridade} é ímpar!`)
//     }
// }
// retornaParidade()

// c- 
// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// function retornaParidade() {
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (array[i] % 2 == 0) {
//             console.log(`${element} é par!`)
//         }
//     }
// }
// retornaParidade()

// d-
// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// function retornaParidade() {
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (array[i] % 2 == 0) {
//             console.log(`${element} é par!`)
//         }
//     }
// }
// retornaParidade()

