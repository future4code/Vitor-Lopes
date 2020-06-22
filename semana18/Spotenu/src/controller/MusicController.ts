import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { MusicDatabase } from "../data/MusicDatabase";
import { UserBusiness } from "../business/UserBusiness";
import { BaseDataBase } from "../data/BaseDatabase";
import { MusicBusiness } from "../business/MusicBusiness";
import { IdGenerator } from "../services/IdGenerator";

export class MusicController {

  async bandList(req: Request, res: Response) {
    try {
      const admTokentToVerify = req.headers.authorization as string
      const token = new Authenticator().verify(admTokentToVerify)

      const userIsAdmin = await new UserBusiness().admVerify(token.id)

      if (!userIsAdmin[0][0]) {
        throw new Error("Somente um perfil administrador pode criar outro administrador.")
      }

      const musicDatabase = await new MusicDatabase().bandList()

      res.status(200).send(musicDatabase[0][0])

    } catch (err) {
      res.status(400).send(err.message)
    } finally {
      await BaseDataBase.destroyConnection();
    }
  }

  async bandApprove(req: Request, res: Response) {
    try {
      const admTokentToVerify = req.headers.authorization as string
      const token = new Authenticator().verify(admTokentToVerify)

      const userIsAdmin = await new UserBusiness().admVerify(token.id)
      if (!userIsAdmin[0][0]) {
        throw new Error("Somente um perfil administrador pode aprovar uma banda.")
      }

      const emailOrNickname = req.body.emailOrNickname
      if (!req.body.emailOrNickname) {
        throw new Error("O campo da banda deve ser preenchido.")
      }

      const bandSearchById = await new MusicDatabase().bandSearchByEmailOrNickname(emailOrNickname)
      if (!bandSearchById[0][0]) {
        throw new Error("Usuário não encontrado.")
      }

      const musicDatabase = await new MusicBusiness().bandApprove(emailOrNickname)
      if (!musicDatabase[0].changedRows) {
        throw new Error("Esta banda ja foi aprovada!")
      }

      res.status(200).send('Banda aprovada com sucesso!')

    } catch (err) {
      res.status(400).send(err.message)
    } finally {
      await BaseDataBase.destroyConnection();
    }
  }

  async addNewGenre(req: Request, res: Response) {
    try {
      const newGenreName = req.body.newGenreName

      if (!newGenreName) {
        throw new Error("Favor preencher o campo Gênero.")
      }
      const genreId = new IdGenerator().generateId()

      await new MusicBusiness().addNewGenre(newGenreName, genreId)

      res.status(200).send(`Gênero '${newGenreName}' criado com sucesso!`)

    } catch (err) {
      err.code === "ER_DUP_ENTRY" && res.status(400).send("Error. O gênero desejado ja existe.")
      res.status(400).send(err.message)
    } finally {
      await BaseDataBase.destroyConnection();
    }
  }

  async getAllGenres(req: Request, res: Response) {
    try {
      const allGenres = await new MusicBusiness().getAllGenres()

      res.status(200).send(allGenres[0])

    } catch (err) {
      res.status(400).send(err.message)
    } finally {
      await BaseDataBase.destroyConnection();
    }
  }
}