import dotenv from "dotenv";
import knex from "knex";
import Knex from "knex";

dotenv.config();

export abstract class BaseDataBase {

  private static KNEX_CONNECTION: Knex | null = null;
  protected static USER_TABLE_NAME = "spotenu_users";
  protected static REFRESHTOKEN_TABLE_NAME = "spotenu_refreshtoken";


  protected getConnection() {
    if (BaseDataBase.KNEX_CONNECTION === null) {
      BaseDataBase.KNEX_CONNECTION = knex({
        client: "mysql",
        connection: {
          host: process.env.DB_HOST,
          port: 3306,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_DATABASE_NAME,
        },
      });
    }
    return BaseDataBase.KNEX_CONNECTION
  }

  public static async destroyConnection() {
    if (BaseDataBase.KNEX_CONNECTION !== null) {
      await BaseDataBase.KNEX_CONNECTION.destroy()
    }
    BaseDataBase.KNEX_CONNECTION = null
  }

  protected convertBooleanToTinyInt(value: boolean): number {
    return value ? 1 : 0;
  }

  protected convertTinyIntToBoolean(value: number): boolean {
    return value === 1;
  }
}