import { BaseDataBase } from "./BaseDatabase";

export class UserDatabase extends BaseDataBase {
  public async signup(id: string, name: string, email: string, password: string, nickname: string, freeListener: number) {
    return await super.getConnection().raw(`
    INSERT INTO ${BaseDataBase.USER_TABLE_NAME} (id, name, email, password, nickname, free_listener)
    VALUES('${id}', '${name}', '${email}', '${password}', '${nickname}', '${freeListener}')
    `)
  }

  public async admSignup(id: string, name: string, email: string, password: string, nickname: string, isAdmin: number) {
    return await super.getConnection().raw(`
    INSERT INTO ${BaseDataBase.USER_TABLE_NAME} (id, name, email, password, nickname, admin)
    VALUES('${id}', '${name}', '${email}', '${password}', '${nickname}', '${isAdmin}')
    `)
  }

  public async admVerify(id: string) {
    return await super.getConnection().raw(`
    SELECT nickname, admin FROM ${BaseDataBase.USER_TABLE_NAME} WHERE id = '${id}' && admin = 1
    `)
  }

}