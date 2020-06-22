import { UserDatabase } from "../data/UserDatabase";
import { MusicDatabase } from "../data/MusicDatabase";
import { Authenticator } from "../services/Authenticator";
import { RefreshTokenDatabase } from "../data/RefreshTokenDatabase";
import { HashManager } from "../services/HashManager";

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

  public async login(email: string, password: string) {

    const musicDatabase = await new MusicDatabase().bandSearchByEmailOrNickname(email)
    const musicDatabaseRow = musicDatabase[0][0]

    console.log('musicDatabase[0][0] on Userbusiness ', musicDatabaseRow)

    if (!musicDatabaseRow) {
      throw new Error("Cadastro não identificado")
    }
    const databasePassword = await new MusicDatabase().bandSearchByEmailOrNickname(email)

    if (!musicDatabaseRow) {
      throw new Error("Email ou password inválidos")
    }

    const isCorrectPassword = await new HashManager().compare(
      password,
      musicDatabaseRow.password
    );

    if (!isCorrectPassword) {
      throw new Error("Email ou password inválidos")
    }
    
    if(musicDatabaseRow.band_approval === 0) {
      throw new Error("Banda aguardando aprovação.")
    }
    

    const id = musicDatabase[0][0].id

    const accessToken = new Authenticator().generateToken({
      id
    }, process.env.ACCESS_TOKEN_EXPIRES_IN);

    const refreshToken = new Authenticator().generateToken({
      id,
    }, process.env.REFRESH_TOKEN_EXPIRES_IN);

    const refreshTokenDatabase = new RefreshTokenDatabase();
    await refreshTokenDatabase.create(
      refreshToken,
      true,
      id
    );

    return {
      accessToken,
      refreshToken,
      musicDatabase
    }
  }

}