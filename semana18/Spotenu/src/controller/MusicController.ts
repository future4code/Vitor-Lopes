import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { MusicDatabase } from "../data/MusicDatabase";
import { UserBusiness } from "../business/UserBusiness";
import { BaseDataBase } from "../data/BaseDatabase";

export class MusicController {

  async bandList (req: Request, res: Response) {
    try {
      const admTokentToVerify = req.headers.authorization as string
      const token = new Authenticator().verify(admTokentToVerify)
      
      const userIsAdmin = await new UserBusiness().admVerify(token.id)
      
      if(!userIsAdmin[0][0]) {
        throw new Error("Somente um perfil administrador pode criar outro administrador.")
      }

      const musicDatabase = await new MusicDatabase().bandList()

      res.status(200).send(musicDatabase[0][0])

    } catch (err) {
      res.status(400).send( err.message )
    } finally {
      await BaseDataBase.destroyConnection();
    }
  }
}