"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserAccount_1 = require("./UserAccount");
const novaConta = new UserAccount_1.Conta('Vitor', '313.333.333-33', '01/06/1985');
const novoExtrato = new UserAccount_1.InfoExtrato(100.01, '313.333.333-33', 'depósito 1');
novaConta.getBalance();
novaConta.addBalance(novoExtrato);
//# sourceMappingURL=index.js.map