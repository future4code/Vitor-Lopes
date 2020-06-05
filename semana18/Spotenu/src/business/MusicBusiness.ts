import { MusicDatabase } from "../data/MusicDatabase";

export class MusicBusiness {

  public async bandList() {
    return new MusicDatabase().bandList
  }
}