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

const num1 = prompt("digite um número:")
const num2 = prompt("digite outro número:")
const num3 = prompt("digite mais um número:")

if(num1<num2 && num2<num3)  {//123
        console.log(num3,num2,num1)
}   else if(num1<num3 && num3<num2) {//132
        console.log(num2,num3,num1)
}   else if(num2<num1 && num1<num3) {//213
        console.log(num3,num1,num2)
}   else if(num2<num3 && num3<num1) {//231
        console.log(num1,num3,num2)
}   else if(num3<num1 && num1<num2) {//312
        console.log(num2,num1,num3)
}   else if(num3<num2 && num2<num1) {//321
        console.log(num1,num2,num3)
}   else if(num1==num2==num3) {//números iguais
        console.log("Todos os números são iguais, digite ao menos um número diferente.")
        window.alert("Todos os números são iguais, digite ao menos um número diferente.")
}

/////_________EXERCÍCIO 5__________/////

let vertebrado = prompt("Possui vértebras?")
let mamifero
let racional
let penas //no
let terrestre
let parteagua

    
    switch(vertebrado)  {
        case "sim":
            console.log("é Vertebrado.")
            let mamifero = prompt("É mamífero?")
            switch(mamifero){
                case "sim":
                    console.log("é mamífero.")
                    break
            }
            

        case "não":
            console.log("não é Vertebrado.")
            break
     
    }
    

    ////////testes////////
    // {
    //     let mamifero = prompt("É mamífero?")
    //     if(mamifero = "sim"){
    //         console.log("É mamífero.")
    //         let racional = prompt("é racional?")
    //             if(racional = "sim"){
    //                 console.log("É humano.")
    //                 alert("É humano.")
    //             }   
    //     }   else if(racional = "não")    {
    //         console.log("não é humano.")
    //     }
    



