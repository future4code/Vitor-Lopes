import{Client} from './Client'

const newClient: Client = {
    name: "Vitor",
    registrationNumber: 1,
    consumedEnergy: 1000,
  
    calculateBill: () => {
      return 2;
    }
  }
  console.log(newClient.calculateBill())
  console.log(newClient.name)
  console.log(newClient.registrationNumber)
  console.log(newClient.consumedEnergy)
//1-a) consegui imprimir todas as propriedades