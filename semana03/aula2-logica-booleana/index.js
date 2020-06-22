
//INTERPRETAÇÃO DE CÓDIGO

// //EXERCÍCIO1
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2 //true

// let resultado = bool1 && bool2 && bool3
// console.log("a. ", resultado)//false

// resultado = (bool2 || bool1) && !bool3
// console.log("b. ", resultado)//false

// resultado = !resultado && (bool1 || bool1)
// console.log("c. ", resultado)//true

// resultado = (resultado && (!bool1 || bool2)) && !bool3
// console.log("d. ", resultado)//false

// console.log("e. ", typeof resultado)//boolean

// //EXERCÍCIO2
// let array
// console.log('I. ', array)

// array = null
// console.log('II. ', array)


// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('III. ', array.length)

// let i = 0
// console.log('IV. ', array[i], " e ", array[i+1])

// array[i+1] = 19
// const valor = array[i+6]
// console.log('V. ', array[i+1], " e ", valor)

// i+=1
// array[i] = array[i-1]
// console.log('VI. ', array[i])

// i = array.length - 1
// array[i] = array[i-3]
// const resultadoC = array[i]%array[1]
// console.log('VII. ', resultadoC)

/*2.    A- O que é array e como se declara em JS?
        R- array é uma variável que pode receber mais de um valor 
           simultaneamente
        B- Qual o index inicial de um array?
        R- [i] começando com zero
        C- Como se determinar o tamanho do array?
        R- utilizando .lenght
        D- Indique todas as mensagens impressas no console.
        R- Indiquei em forma de comentários ao lado de cada console.log()
            1-  false
                false
                true
                false
                boolean

            2-  undefined
                null
                11
                3 e 4
                19 e 9
                3
                1
*/

//Exercícios de escrita de código

//EXERCÍCIO1

// KELVIN TO FAHRENHEIT
let GRAUS_FAHRENHEIT = 77
let KELVIN
(KELVIN) = (GRAUS_FAHRENHEIT - 32)*5/9 + 273.15

console.log(GRAUS_FAHRENHEIT + "ºF equivalem a " + KELVIN + "ºK")

//FAHRENHEIT TO C
let GRAUS_CELSIUS2 = 80
let GRAUS_FAHRENHEIT2
let KELVIN2
GRAUS_FAHRENHEIT2 = (GRAUS_CELSIUS2)*9/5 + 32
KELVIN2 = (GRAUS_FAHRENHEIT2 - 32)*5/9 + 273.15

console.log(GRAUS_CELSIUS2 + "ºC equivalem a "+ GRAUS_FAHRENHEIT2 + "ºF e " + KELVIN2 + "ºK" )

//Altere o último item para que o usuário insira o valor em graus 
//Celsius que ele deseja converter.
const GRAUS_CELSIUS3 = prompt  ("Digite a temperatuca em Celcius")
let GRAUS_FAHRENHEIT3
let KELVIN3
GRAUS_FAHRENHEIT3 = (GRAUS_CELSIUS3)*9/5 + 32
KELVIN3 = (GRAUS_FAHRENHEIT3 - 32)*5/9 + 273.15

console.log(GRAUS_CELSIUS3 + "ºC equivalem a "+ GRAUS_FAHRENHEIT3 + "ºF e " + KELVIN3 + "ºK" )
window.alert(GRAUS_CELSIUS3 + "ºC equivalem a "+ GRAUS_FAHRENHEIT3 + "ºF e " + KELVIN3 + "ºK")

// EXERCÍCIO2
const perg1 = prompt("Qual é o seu nome?")
console.log(perg1)
const perg2 = prompt("Aonde você mora?")
console.log(perg2)
const perg3 = prompt("Qual seu estilo musical preferido?")
console.log(perg3)
const perg4 = prompt("Qual é sua comida preferida?")
console.log(perg4)
const perg5 = prompt("O que uma impressora disse pra outra?")
console.log(perg5)

//EXERCÍCIO3
//a
const salario = prompt("Valor so salário mínimo:")
console.log("Salário mínimo = R$" + salario)
const consumo = prompt("Consumo em kiloWatt")
console.log(consumo + "kW/h de consumo.")
const kwatt = 0.05
let pagar = consumo * kwatt
console.log("Você deve pagar R$" + pagar + " reais")

//b
const desconto = pagar - (pagar * .15)
console.log("Pagando até dia x, você paga apenas R$" + desconto + " reais")

