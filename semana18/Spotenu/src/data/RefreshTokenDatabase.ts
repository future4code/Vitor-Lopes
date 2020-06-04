import { BaseDataBase } from "./BaseDatabase";

export class RefreshTokenDatabase extends BaseDataBase {

  public async create(
    token: string,
    isActive: boolean,
    userId: string
  ): Promise<void> {
    await super.getConnection().raw(`
    INSERT INTO ${BaseDataBase.REFRESHTOKEN_TABLE_NAME}(refresh_token, is_active, user_id)
    VALUES(
      "${token}",
      ${super.convertBooleanToTinyInt(isActive)},
      "${userId}"
    )
  `)
  }
}