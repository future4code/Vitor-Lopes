import { Conta, InfoExtrato } from "./UserAccount"

const novaConta: Conta = new Conta('Vitor', '313.333.333-33', '01/06/1985')
// console.log(novaConta)

const novoExtrato: InfoExtrato = new InfoExtrato(100.01, '313.333.333-33', 'depósito 1')

novaConta.getBalance()
novaConta.addBalance(novoExtrato)