import { User } from "./User";
import 'moment/locale/pt-br';

enum TEACHER_SPECIALTY {
  REACT = "REACT",
  REDUX = "REDUX",
  CSS = "CSS",
  TESTES = "TESTES",
  TYPESCRIPT = "TYPESCRIPT",
  OOP = "OOP",
  BACKEND = "BACKEND",
}

export class Teacher implements User {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public specialties: TEACHER_SPECIALTY[]
  ) {

  }
  
}
