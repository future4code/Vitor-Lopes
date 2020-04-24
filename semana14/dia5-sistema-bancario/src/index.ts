import * as moment from 'moment'
moment.locale('pt-br')

type extratoDetalhado = {
    valor: number,
    descricao: string,
    data: moment.Moment
}


type conta = {
    usuario: {
        nome: string,
        CPF: string,
        dataDeNascimento: string
    },
    saldo: number,
    extrato: extratoDetalhado[] 
}

function createAccount() {

}

function getAllAccounts() {
    
}