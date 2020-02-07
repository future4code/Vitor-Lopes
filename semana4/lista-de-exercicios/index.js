//////////EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO//////////
///////////___________EXERCÍCIO 1____________///////////
/**
 * vai depender do valor digitado no prompt. O valor que 
 * deve aparecer em reais é o valorEmDolar * cotação.Ex- se
 * o valor do prompt for 4, vai sair 400 no console
 */
///////////___________EXERCÍCIO 2____________///////////
/**
 * 165
 *tipo de investimento informado incorreto
 */
///////////___________EXERCÍCIO 3____________///////////
/**
 * 14
 * 6
 * 8
 */
///////////___________EXERCÍCIO 4____________///////////
/**
 * log numero1 = acho que mostra todos os numeros, ja que infinito 
 * deve ir tanto pra >0 quanto <0
 * log numero2 = todos os numeros exceto -10
 */
///////////EXERCÍCIO DE LÓGICA DE PROGRAMAÇÃO///////////
///////////___________EXERCÍCIO 1____________///////////
///////////___________EXERCÍCIO 2____________///////////
/* 
    A- false
    B- false
    C- true
    D- true
    E- true
*/
///////////___________EXERCÍCIO 3____________///////////
/**
 *  O Código não funcionava.
    o código deveria ter um valor para quantidadeDeNumerosPares por ser const.
    faltou incrementar 2 ao valor de i pois do jeito que estava, 0 x 2 sempre será 0
 */
function LógicaDeProgramacaoEx03(quantidadeDeNumerosPares) {
    // const quantidadeDeNumerosPares = 10
    let i = 0
    while (i <= quantidadeDeNumerosPares) {
        console.log(i)
        i += 2
    }
}
LógicaDeProgramacaoEx03()

///////////___________EXERCÍCIO 4____________///////////

function LógicaDeProgramacaoEx04(a, b, c) {
    if (a === b && b === c) {
        console.log("Triângulo equilátero.")
    } else if ((a === b || a === c | b === c) && (a !== b || a !== c || b !== c)) {
        console.log("Triângulo isósceles.")
    } else {
        console.log("Triângulo escaleno.")
    }
}
// LógicaDeProgramacaoEx04()

///////////___________EXERCÍCIO 5____________///////////

function LógicaDeProgramacaoEx05(a, b) {
    a
    b
    console.log(`${a} e ${b}.`)
    if (a > b) {
        console.log(`O maior é: ${a}`)
    } else {
        console.log(`O maior é: ${b}`)
    }
    if (a % b !== 0) {
        console.log(`${a} não é divisivel por ${b}`)
    } else {
        console.log(`${a} é divisivel por ${b}`)
    }
    if (b % a !== 0) {
        console.log(`${b} não é divisivel por ${a}`)
    } else {
        console.log(`${b} é divisivel por ${a}`)
    }
    //Math.abs retorna o valor absoluto de um número
    console.log(`A diferença entre eles é ${Math.abs(a - b)}`)
}
// LógicaDeProgramacaoEx05(10, 20)

///////////_______EXERCÍCIO DE FUNÇÕES_______///////////
///////////___________EXERCÍCIO 1____________///////////

function exerciciosDeFuncoes1(arrayDeNumeros) {
    let arraySemMaiorEMenor = arrayDeNumeros.sort(sortArray)

    console.log(arraySemMaiorEMenor) //array já em ordem crescente

    arraySemMaiorEMenor.pop()
    arraySemMaiorEMenor.shift()

    console.log(arraySemMaiorEMenor) //array sem maior e menor valores iniciais
    console.log(arraySemMaiorEMenor[0]) //menor número
    console.log(arraySemMaiorEMenor[arraySemMaiorEMenor.length - 1]) //Maior número

    function sortArray(a, b) { //função para colocar array em ordem crescente
        return (a - b)
    }
}
// exerciciosDeFuncoes1([3, 1, 4, 5, 10, 7, 8, 21, 6]) //coloque números seguindo o padrão [1, 4, 15, 3]


///////////___________EXERCÍCIO 2____________///////////

let exerciciosDeFuncoes2 = () => {
    alert("Hello Future4!")
}

//  let invoke = exerciciosDeFuncoes2()


///////////_______EXERCÍCIO DE OBJETOS_______///////////
///////////___________EXERCÍCIO 1____________///////////
/**
 * array de objetos é um tipo de array que recebe 
 *  podem ser utilizados quando temos varios valores que 
 * façam sentido estar juntos. Por exemplo, ao armazenar 
 * os dados de um cliente, é interessante que todos os 
 * dados estejam em um sólugar a fim de facilitar o 
 * acesso de forma organizada.
 */
///////////___________EXERCÍCIO 2____________///////////

function criaRetangulo(lado1, lado2) {
    console.log(`largura ${lado1}, altura ${lado2}, perímetro ${2 * (lado1 + lado2)} e área ${lado1 * lado2}`)
}
// criaRetangulo(100, 20)


///////////___________EXERCÍCIO 3____________///////////

function exerciciosDeObjetos3() {

    const filmeFavorito = {
        titulo: "O Senhor do Javascript",
        ano: 2020,
        diretor: "Vitor Lopes",
        atores: ["Paula Arantes", "João Alves", "Goli", "Rebeca Cristino", "Artur Vilas Boas"]

    }
    console.log(`Venha assistir ao filme ${filmeFavorito.titulo}, de
${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor}
e estrelado por ${filmeFavorito.atores}!`)
}
// exerciciosDeObjetos3()


///////////___________EXERCÍCIO 4____________///////////

const cadastroDePessoas = [{
    nome: "vitor",
    idade: 34,
    email: "vitor@email.com",
    endereco: "Avenida das Acácias,22"
}]

function exerciciosDeObjetos4() {

    const pessoaCadastrada = cadastroDePessoas.map((user, index, array) => {
        user.nome = "anonimo";
        return user;
    })
    console.log(pessoaCadastrada)
    console.log(cadastroDePessoas)
}

// exerciciosDeObjetos4()


///////////__EXERCÍCIO DE FUNÇÕES DE ARRAY___///////////
///////////___________EXERCÍCIO 1____________///////////

// A-
const lista = [
    { nome: "Pedro", idade: 20 },
    { nome: "João", idade: 10 },
    { nome: "Paula", idade: 12 },
    { nome: "Artur", idade: 89 }
]
function arrayAdultos() {

    const arrayMaiorQue20 = lista.filter((pessoa, index, array) => {
        return pessoa.idade >= 20
    })
    console.log(arrayMaiorQue20)
}
// arrayAdultos()

//B-
function arrayCriancas () {
    const arrayMenorQue20 = lista.filter((pessoa, index, array) => {
        return pessoa.idade < 20
    })
    console.log(arrayMenorQue20)
}
// arrayCriancas()


///////////___________EXERCÍCIO 2____________///////////

//A- 
function exerciciosDeObjetos4() {
    array = [1, 2, 3, 4, 5, 6]    
    
    const arrayVezes2 = lista.filter((numero, index, array) => {
        return (array * 2)

})
console.log(arrayVezes2)
}
exerciciosDeObjetos4()



///////////___________EXERCÍCIO 3____________///////////

const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]
function regraMontanhaRussa () {
    
    const regraAltura = pessoas.filter((tamanho, index, array) => {
        return (tamanho.altura > 1.5 && tamanho.idade > 14 && tamanho.idade < 60)
    }) 
    console.log(regraAltura)
}
regraMontanhaRussa()



///////////___________EXERCÍCIO 4____________///////////
///////////___________EXERCÍCIO 5____________///////////




