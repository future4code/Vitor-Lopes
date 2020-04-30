import moment = require("moment");
import { Student } from "./Student";
import { Teacher } from "./Teacher";

export abstract class Mission {
  private name: string = "";

  constructor(
    private id: string,
    private startDate: moment.Moment,
    private endDate: moment.Moment,
    private teachers: Teacher[] = [],
    private students: Student[] = [],
    private currentModule: number = undefined
  ) { }

  public getId(): string {
    return this.id;
  }

  public getName(name: string): string {
    return this.name;
  }

  public getStartDate(): moment.Moment {
    return this.startDate;
  }

  public getEndDate(): moment.Moment {
    return this.endDate;
  }

  public getCurrentModule(): number | undefined {
    return this.currentModule;
  }

  public addTeacher(teacher: Teacher) {
    this.teachers.push(teacher);
  }

  public addStudent(student: Student) {
    this.students.push(student);
  }

  public setName(name: string) {
    this.name = name;
  }
}