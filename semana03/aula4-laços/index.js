//////////EXERCÍCIO DE LEITURA DE CÓDIGO/////
/////___________EXERCÍCIO 1____________/////

// let sum = 0
// for(let i = 0; i < 15; i++) {   //Ele acrescenta sempre 1 número ao i a cada laço.
//   sum += i                      //aqui a soma é igual a soma + i e o programa vai rodando até q o i seja < que 15
// }
// console.log(sum) //resultado impresso 105

/////___________EXERCÍCIO 2____________/////

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// const novaLista = []
// const numero = 4
// for (const item of lista) {
//     if (item % numero === 0) {
//         novaLista.push(item)
//     }
// }
// console.log(novaLista)

// a- ele acrescenta um valor no array
// b- (4) [10, 15, 25, 30]
// c- valor 3 = (6) [12, 15, 18, 21, 27, 30]
//    valor 4 = [12]

//////////EXERCÍCIO DE ESCRITA DE CÓDIGO/////
/////___________EXERCÍCIO 3-A____________/////

// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let maior = arrayOriginal[0]
// let menor = arrayOriginal[0]
// for(let i = 0; i < arrayOriginal.length; i++) {
//     let elemento = arrayOriginal[i]

//     if(elemento > maior) {
//         maior = elemento
//     }   else if(elemento <= menor) {
//         menor = elemento
//     }
// }
// console.log(`O maior número é ${maior} e o menor número é ${menor}`)

/////___________EXERCÍCIO 3-B____________/////

// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let maior = Number(arrayOriginal[0])
// let divisao
// let arrayNovo = []
// for(let i = 0; i < arrayOriginal.length; i++) {
//     let elemento = arrayOriginal[i]
//     divisao = elemento / 10
//     // console.log(divisao)
//     arrayNovo.push(divisao)
// }
// console.log(arrayNovo)

/////___________EXERCÍCIO 3-C____________/////

// const arrayDePalavras = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let mensagem = ""

// for(let numero of arrayDePalavras) {

//     if(numero%10 === 0){
//         console.log(numero)
//     }
// }

/////___________EXERCÍCIO 3-D____________/////

// const arrayDePalavras = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let numero = arrayDePalavras[0]

// for (let i = 0; i < arrayDePalavras.length; i++) {
//     let array2 = arrayDePalavras.slice(0)
    
//     console.log(`O elemento ${i} do índex é: ${array2}`)
// }

