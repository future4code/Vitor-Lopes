//////////EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO//////////
///////////___________EXERCÍCIO 1____________///////////
///////////___________EXERCÍCIO 2____________///////////
///////////___________EXERCÍCIO 3____________///////////
///////////___________EXERCÍCIO 4____________///////////


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
    console.log(`A diferença entre eles é ${Math.abs(a - b)}` )

}
// LógicaDeProgramacaoEx05(10, 20)



///////////_______EXERCÍCIO DE FUNÇÕES_______///////////
///////////___________EXERCÍCIO 1____________///////////
///////////___________EXERCÍCIO 2____________///////////

///////////_______EXERCÍCIO DE OBJETOS_______///////////
///////////___________EXERCÍCIO 1____________///////////
///////////___________EXERCÍCIO 2____________///////////
///////////___________EXERCÍCIO 3____________///////////
///////////___________EXERCÍCIO 4____________///////////

///////////__EXERCÍCIO DE FUNÇÕES DE ARRAY___///////////
///////////___________EXERCÍCIO 1____________///////////
///////////___________EXERCÍCIO 2____________///////////
///////////___________EXERCÍCIO 3____________///////////
///////////___________EXERCÍCIO 4____________///////////
///////////___________EXERCÍCIO 5____________///////////




