import { User } from "./User";


export class Employee extends User {
    protected admissionDate: string = '01/01/2020'
    protected baseSalary: number = 999.99
    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
    ) {
        super(id, email, name, password);
    }
    public getAdmissionDate(): string {
        return this.admissionDate
    }
    public getBaseSalary(): number {
        return this.baseSalary
    }
    public calculateTotalSalary(): number {
        return this.baseSalary -=400
    }
}