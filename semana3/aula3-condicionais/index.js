/////EXERCÍCIO DE LEITURA DE CÓDIGO/////

/////_________EXERCÍCIO 1__________/////

/*Esse código faz uma verificação de números pares. Se o numero digitado for 
divisível por 2, então é um numero par e a mensagem "Passou no teste" aparece
no log*/

// const respostaDoUsuario = prompt("Digite o número que você quer testar?")//armazena o que o usuário digita
// const numero = Number(respostaDoUsuario)//trata como número a respostaDoUsuario

// if(numero % 2 === 0) {
//   console.log("Passou no teste.") //se for par
// } else {
//   console.log("Não passou no teste.")//para qualquer resultado diferente de números pares(inclusive letras)
// }

/////_________EXERCÍCIO 2__________/////

/*  a- O programa foi feito para mostrar o valor da fruta escolhida pelo usuário
    b- O preço da fruta  Maçã  é  R$  2.25
    c- Pagaria R$24.55
    d- R$  5
*/

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM d.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


/////_________EXERCÍCIO 3__________/////

/*  R- Mensagem não está definida. Isso ocorre pois o let mensagem está dentro do
       escopo do primeiro if. O correto seria ele ocupar um lugar na linha abaixo
       do const numero2 para que seja lido corretamente
 
 */

// const numero1 = prompt("Digite o primeiro número.")
// const numero2 = prompt("Digite o próximo número?")

// if(numero1 > 0 && numero2 > 0) {
//   let mensagem
//   if(numero1 > numero2) {
//     mensagem = "Número 1 é maior que o 2!"
//   } else {
//     mensagem = "Número 1 é menor ou igual ao 2!"
//   }
// }

// console.log(mensagem)


/////EXERCÍCIO DE ESCRITA DE CÓDIGO/////

/////_________EXERCÍCIO 4__________/////
// a- Ao colocar dois números iguais o programa imprime ambos os números
// b- se os 3 numeros forem iguais, não apareceia nada no meu log
// c- Indicado na linha 94 e 95.

// const num1 = prompt("digite um número:")
// const num2 = prompt("digite outro número:")
// const num3 = prompt("digite mais um número:")

// if(num1<num2 && num2<num3)  {//123
//         console.log(num3,num2,num1)
// }   else if(num1<num3 && num3<num2) {//132
//         console.log(num2,num3,num1)
// }   else if(num2<num1 && num1<num3) {//213
//         console.log(num3,num1,num2)
// }   else if(num2<num3 && num3<num1) {//231
//         console.log(num1,num3,num2)
// }   else if(num3<num1 && num1<num2) {//312
//         console.log(num2,num1,num3)
// }   else if(num3<num2 && num2<num1) {//321
//         console.log(num1,num2,num3)
// }   else if(num1==num2==num3) {//números iguais
//         console.log("Todos os números são iguais, digite ao menos um número diferente.")
//         window.alert("Todos os números são iguais, digite ao menos um número diferente.")
// }

/////_________EXERCÍCIO 5__________/////

//link para o diagrama logo abaixo
//https://drive.google.com/file/d/1SUrqYnBRaMrsHrAq6LKuk8hdEKaZtd73/view?usp=sharing

const vertebrado = prompt("Responda apenas com 'sim' ou 'não'. O animal Possui vértebras?")
let mamifero
let racional
let penas
let terrestre
let parteagua

switch (vertebrado) {
    case "sim":
        console.log("é Vertebrado.")
        let mamifero = prompt("É mamífero?")
        switch (mamifero) {
            case "sim":
                console.log("é mamífero.")
                let racional = prompt("É racional?")
                switch (racional) {
                    case "sim":
                        console.log("é Humano!")
                        alert("é humano!")
                        breakswitch(vertebrado)
                    case "não":
                        console.log("é irracional.")
                }
            case "não":
                console.log("não é mamífero")
                let penas = prompt("tem penas?")
                switch (penas) {
                    case "sim":
                        console.log("é uma ave!")
                        alert("é uma ave!")
                        break
                    case "não":
                        console.log("não é uma ave.")
                        let terrestre = prompt("é terrestre?")
                        switch (terrestre) {
                            case "sim":
                                console.log("é terrestre")
                                let parteagua = prompt("Passa parte da vida na agua?")
                                switch (parteagua) {
                                    case "sim":
                                        console.log("é anfíbio!")
                                        alert("é anfíbio!")
                                        break
                                    case "não":
                                        console.log("é um réptil!")
                                        alert("é um réptil!")
                                        break
                                }
                                break
                            case "não":
                                console.log("é um peixe!")
                                alert("é um peixe!")
                                break
                        }
                }
                break
        }
        break
    case "não":
        console.log("invertebrado")
        alert("é invertebrado!")
        break
    default:
        console.log("Comece novamente")
}


