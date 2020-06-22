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
  public async bandApprove(emailOrNickname: string) {
    return await super.getConnection().raw(`
    UPDATE sagan_vitor_db.${BaseDataBase.USER_TABLE_NAME} 
    SET band_approval = '1' 
    WHERE name = '${emailOrNickname}'
    OR nickname = '${emailOrNickname}' 
    AND band_approval = '0';
    `)
  }
  public async bandSearchByEmailOrNickname(emailOrNickname: string) {
    return await super.getConnection().raw(`
     SELECT *
     FROM ${BaseDataBase.USER_TABLE_NAME} 
     WHERE email = '${emailOrNickname}'
     OR nickname = '${emailOrNickname}';
    `)
  }
}