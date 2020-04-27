"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InfoExtrato {
    constructor(valor, CPF, descricao) {
        this.valor = valor;
        this.CPF = CPF;
        this.descricao = descricao;
    }
}
exports.InfoExtrato = InfoExtrato;
class Conta {
    constructor(nome, CPF, dataDeNascimento, saldo = 0) {
        this.nome = nome;
        this.CPF = CPF;
        this.dataDeNascimento = dataDeNascimento;
        this.saldo = saldo;
        this.extrato = [];
    }
    getBalance() {
        console.log(`o seu saldo é R$${this.saldo}`);
        return this.saldo;
    }
    addBalance(extrato) {
        this.saldo += extrato.valor;
        this.extrato.push(extrato);
        console.log(`Depósito realizado com sucesso - ${extrato.valor}`);
        this.getBalance();
    }
}
exports.Conta = Conta;
//# sourceMappingURL=UserAccount.js.map