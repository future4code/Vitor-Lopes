import { UserDatabase } from "../data/UserDatabase";

export class UserBusiness {

  public async signup(id: string, name: string, email: string, password: string, nickname: string, freeListener: number) {
    return new UserDatabase().signup(id, name, email, password, nickname, freeListener);
  }

  public async admSignup(id: string, name: string, email: string, password: string, nickname: string, isAdmin: number) {
    return new UserDatabase().admSignup(id, name, email, password, nickname, isAdmin);
  }
  public async admVerify(id: string) {
    return new UserDatabase().admVerify(id)
  }

  public async bandSignup(id: string, name: string, email: string, password: string, nickname: string, bandDescription: string, bandApproval: number) {
    return new UserDatabase().bandSignup(id, name, email, password, nickname, bandDescription, bandApproval)
  }
}