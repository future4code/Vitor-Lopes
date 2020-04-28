import { User } from './User'
import { Customer } from './Customer'
import { Employee } from './Employee'
import { Seller } from './Seller'

//Exercício 01
// const userVitor: User = new User('id1', 'vitor@email.com', 'Vitor Lopes', 'password123')

// console.log(userVitor.getId())
// console.log(userVitor.getEmail())
// console.log(userVitor.getName())

// console.log(userVitor) //1-a) foi possível dessa forma. Daria pra criar outro método ou dentro de algum método ja criado, daria pra dar um 'console.log(this.password)'

//1-b) Só apareceu 1x

//Exercício 02
// const newCustomer: Customer = new Customer('id2', 'email@email.com', 'Vitor Lopes', '123deOliveira4', 'MasterCard')
// console.log(newCustomer.getCreditCard())
// console.log(newCustomer.getPurchaseTotal())
// console.log(newCustomer.introduceYourself())
// console.log(newCustomer)
//2-a) 1x
//2-b) só apareceu 1x porém pelo típo da pergunta creio que deveria aparecer mais do que 1x

//Exercício 03
//Id, Email, Name e Password são privados e apenas acessíveis pela classe User
//FOi possível apenas com 'console.log(newCustomer)'

// const newEmployee: Employee = new Employee('id3', 'email@empresa.com', 'João da Silva', 'senhaSegura123')
// console.log(newEmployee.getAdmissionDate())
// console.log(newEmployee.getBaseSalary())
// //Exercício 6
//6-a) 1x
//6-b) admissionDate  e  baseSalary(eu estou comentando os outros console.log dos exercícios anteriores)
//Exercício 07
// console.log(newEmployee.calculateTotalSalary())
//exercício 08
const newSeller: Seller = new Seller('id0001', 'email@email.com', 'Vendedor Xavier', 'senha 321')
//8-a) id, email, nome, senha
console.log( newSeller.id)
console.log( newSeller.email)
console.log( newSeller.name)
console.log( newSeller.password)
console.log( newSeller.admissionDate)
console.log( newSeller.baseSalary)
//8-b) Não consegui imprimir nada, mas provavelmente eu esteja fazendo do jeito errado