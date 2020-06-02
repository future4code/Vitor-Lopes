import {userPurchase, User} from '../src/Exercicio01&02'

describe("Testing userPurchase ", () => {
  test("Should return balance greater than value", () => {
    const user: User = {
      name: "Vitor",
      balance: 1000
    }
  
    const result = userPurchase(user, 250)
  
    expect(result).toEqual({
      ...user,
      balance: 750
    })
  
  })

  test("Shoult return balance greater than value", () => {
    const user: User = {
      name: "Vitor",
      balance: 1000
    }
  
    const result = userPurchase(user, 1000)
    
    expect(result).toEqual({
      ...user,
      balance: 0
    })
  })

  test("balance should return lesser than value ", () => {
    const user: User ={
      name: "Vitor",
      balance: 1000
    }

    const result = userPurchase(user, 1500)

    expect(result).toEqual(undefined)
  })
})
