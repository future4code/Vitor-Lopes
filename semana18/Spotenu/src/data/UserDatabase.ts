import { BaseDataBase } from "./BaseDatabase";

export class UserDatabase extends BaseDataBase {
  public async signup(id: string, name: string, email: string, password: string, nickname: string, freeListener: number) {
    return await super.getConnection().raw(`
    INSERT INTO ${BaseDataBase.USER_TABLE_NAME} (id, name, email, password, nickname, free_listener)
    VALUES('${id}', '${name}', '${email}', '${password}', '${nickname}', '${freeListener}')
    `)
  }
}