import { Mission } from "./Mission";

export class NightMission extends Mission {
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

  public setName(name: string) {
    if (name.indexOf("-na-night") !== -1) {
      super.setName(name);
    }
  }
}