import { BaseDataBase } from "./BaseDatabase"

export class MusicDatabase extends BaseDataBase {
  public async bandList() {
    return await super.getConnection().raw(`
    SELECT name, email, nickname, band_approval 
    FROM ${BaseDataBase.USER_TABLE_NAME} 
    WHERE band_approval = 0 
    OR band_approval = 1;
    `)
  }
  public async bandApprove(id: string) {
    return await super.getConnection().raw(`
    UPDATE sagan_vitor_db.${BaseDataBase.USER_TABLE_NAME} 
    SET band_approval = '1' 
    WHERE id = '${id}' 
    && band_approval = '0';
    `)
  }
  public async bandSearchById(id: string) {
    return await super.getConnection().raw(`
     SELECT id, band_approval
     FROM ${BaseDataBase.USER_TABLE_NAME} 
     WHERE id = '${id}'
    `)
  }
}