import {User} from './User'

export class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    // public getId(): string {
    //   return this.id;
    // }
    // public getEmail(): string {
    //   return this.email;
    // }
    // public getName(): string {
    //   return this.name;
    // }
    // public getPassword(): string {
    //   return this.password;
    // }
    public getPurchaseTotal(): number {
      return this.purchaseTotal;
    }
    public getCreditCard(): string {
      return this.creditCard;
    }
  }