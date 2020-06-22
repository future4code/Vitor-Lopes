import { MusicDatabase } from "../data/MusicDatabase";

export class MusicBusiness {

  public async bandList() {
    return new MusicDatabase().bandList
  }
  public async bandApprove(emailOrNickname: string) {
    return new MusicDatabase().bandApprove(emailOrNickname)
  }
  public async bandSearchByEmailOrNickname(emailOrNickname: string) {
    return new MusicDatabase().bandSearchByEmailOrNickname(emailOrNickname)
  }
  public async addNewGenre(newGenreName: string, genreId: string) {
    return new MusicDatabase().addNewGenre(newGenreName, genreId)
  }
  public async getAllGenres() {
    return new MusicDatabase().getAllGenres()
  }
}