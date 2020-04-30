import { User } from "./User";
import { JSONFileManager } from "./JSONFileManager";

export enum TEACHER_SPECIALTY {
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
  ) { }

  public setNewTeacher(teacher: Teacher): void {
    const fileManager = new JSONFileManager('src/infoLabenu/teachers.json');
    let jsonData: Teacher[] = [];
    try {
      jsonData = fileManager.readFile();
    } catch (e) {
      console.log(e)
    }
    jsonData.push(teacher);
    fileManager.writeFile(jsonData)
    console.log(fileManager.readFile())
  }


}
