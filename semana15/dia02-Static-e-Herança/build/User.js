"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(id, email, name, password) {
        console.log("Chamando o construtor da classe User");
        this.id = id;
        this.email = email;
        this.name = name;
        this.password = password;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getName() {
        return this.name;
    }
    introduceYourself() {
        return `Olá, sou o ${this.name}. bom dia!!`;
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map