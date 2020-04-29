"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
class Employee extends User_1.User {
    constructor(id, email, name, password) {
        super(id, email, name, password);
        this.admissionDate = '01/01/2020';
        this.baseSalary = 999.99;
    }
    getAdmissionDate() {
        return this.admissionDate;
    }
    getBaseSalary() {
        return this.baseSalary;
    }
    calculateTotalSalary() {
        return this.baseSalary -= 400;
    }
}
exports.Employee = Employee;
//# sourceMappingURL=Employee.js.map