import { BaseDataBase } from "./BaseDatabase"

export class MusicDatabase extends BaseDataBase {
  public async bandList() {
    return await super.getConnection().raw(`
    SELECT name, email, nickname, band_approval FROM ${BaseDataBase.USER_TABLE_NAME} WHERE band_approval = 0 OR band_approval = 1;
    `)
  }
}