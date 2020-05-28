import { User } from "./User";
import 'moment/locale/pt-br';
import { JSONFileManager } from "./JSONFileManager";

let now = 2020;

export class Student implements User {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public birthDate: number,
    public hobbies: string[]
  ) { }

  public getAge(): number {
    return now - this.birthDate
  }

  public setNewStudent(student: Student): void {
    const fileManager = new JSONFileManager('src/infoLabenu/students.json');
    let jsonData: Student[] = [];
    try {
      jsonData = fileManager.readFile();
    } catch (e) {
      console.log(e)
    }
    jsonData.push(student);
    fileManager.writeFile(jsonData)
    console.log(fileManager.readFile())
  }
}
