"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Seller_1 = require("./Seller");
const newSeller = new Seller_1.Seller('id0001', 'email@email.com', 'Vendedor Xavier', 'senha 321');
console.log(newSeller.id);
console.log(newSeller.email);
console.log(newSeller.name);
console.log(newSeller.password);
console.log(newSeller.admissionDate);
console.log(newSeller.baseSalary);
//# sourceMappingURL=index.js.map