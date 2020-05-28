import { Mission } from "./Mission";

export class FullTimeMission extends Mission {
  constructor(
    id: string,
    startDate: any,
    endDate: any,
    teachers: [],
    students: [],
    currentModule: number,
  ) {
    super(id, startDate, endDate, teachers, students, currentModule)
  }
}