import { User } from "./User";
import * as moment from 'moment';
import 'moment/locale/pt-br';

let now = 2020;

export class Student implements User {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public birthDate: number,
    public hobbies: string[]
  ) {

  }
  
  public getAge(): number {
    return now - this.birthDate
  }
}
