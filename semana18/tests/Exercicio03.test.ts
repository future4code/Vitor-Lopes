import {verifyAge, User, NACIONALITY, LOCATION, Casino} from '../src/Exercício03'

describe("Testing verifyAge", () => {
  test("should receive an allowed  Brazilian User", () => {
    const brazilianUser: User ={
      name: "Vitor",
      age: 35,
      nacionality: NACIONALITY.BRAZILIAN      
    }

    const casino: Casino ={
      name: "Vinewood Casino",
      location: LOCATION.BRAZIL
    }

    const result = verifyAge(casino, [brazilianUser])
    expect(result.brazilians.allowed).toEqual(["Vitor", ])
  })

  test("should receive an allowed American User", () => {
    const americanUser: User = {
      name: "John Goliath",
      age: 25,
      nacionality: NACIONALITY.AMERICAN
    }

    const casino: Casino = {
      name: "Flamingo",
      location: LOCATION.BRAZIL
    }

    const result = verifyAge(casino, [americanUser])
    expect(result.americans.allowed).toEqual(["John Goliath"])
  })

  test("should return only disallowed users", () => {
    const brazilian: User = {
      name: "Pedro",
      age: 20,
      nacionality: NACIONALITY.BRAZILIAN,
    };
    const brazilian2: User = {
      name: "Paulo",
      age: 15,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const american: User = {
      name: "James",
      age: 13,
      nacionality: NACIONALITY.AMERICAN,
    };
    const american2: User = {
      name: "Thompsom",
      age: 18,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Balada Estelar",
      location: LOCATION.EUA,
    };

    const result = verifyAge(casino, [
      brazilian,
      brazilian2,
      american,
      american2,
    ]);
    expect(result.brazilians.disallowed).toEqual(["Pedro", "Paulo"]);
    expect(result.americans.disallowed).toEqual(["James", "Thompsom",]);
  })
})