import { MusicDatabase } from "../data/MusicDatabase";

export class MusicBusiness {

  public async bandList() {
    return new MusicDatabase().bandList
  }
  public async bandApprove(id: string) {
    return new MusicDatabase().bandApprove(id)
  }
  public async bandSearchById(id: string) {
    return new MusicDatabase().bandSearchById(id)
  }
}