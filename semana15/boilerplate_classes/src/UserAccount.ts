export class InfoExtrato {

  constructor(valor: number, CPF: string, descricao: string) {
    this.valor = valor;
    this.CPF = CPF;
    this.descricao = descricao;
  }
  valor: number;
  CPF: string;
  descricao: string;
}

export class Conta {
  constructor(nome: string, CPF: string, dataDeNascimento: string, saldo: number = 0) {
    this.nome = nome
    this.CPF = CPF
    this.dataDeNascimento = dataDeNascimento
    this.saldo = saldo
    this.extrato = []
  }

  nome: string;
  CPF: string;
  dataDeNascimento: string;
  saldo: number;
  extrato: InfoExtrato[];

  getBalance(): number {
    console.log(`o seu saldo é R$${this.saldo}`)
    return this.saldo
  }

  addBalance(extrato: InfoExtrato): void {
    this.saldo += extrato.valor
    this.extrato.push(extrato)
    console.log(`Depósito realizado com sucesso - ${extrato.valor}`)
    this.getBalance()
  }
}
