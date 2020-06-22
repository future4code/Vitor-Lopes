import { MusicDatabase } from "../data/MusicDatabase";

export class MusicBusiness {

  public async bandList() {
    return new MusicDatabase().bandList
  }
  public async bandApprove(emailOrNickname: string) {
    return new MusicDatabase().bandApprove(emailOrNickname)
  }
  // public async bandSearchById(id: string) {
  //   return new MusicDatabase().bandSearchById(id)
  // }
  public async bandSearchByEmailOrNickname(emailOrNickname: string) {
    return new MusicDatabase().bandSearchByEmailOrNickname(emailOrNickname)
  }
}