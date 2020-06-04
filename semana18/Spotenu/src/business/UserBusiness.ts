import { UserDatabase } from "../data/UserDatabase";

export class UserBusiness {

  public async signup(id: string, name: string, email: string, password: string, nickname: string, freeListener: number) {
    return new UserDatabase().signup(id, name, email, password, nickname, freeListener);
  }

}