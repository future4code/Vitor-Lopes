import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { BaseDataBase } from "../data/BaseDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { UserDatabase } from "../data/UserDatabase";
import { RefreshTokenDatabase } from "../data/RefreshTokenDatabase";

export class UserController {

  async signup(req: Request, res: Response) {
    try {
      if (!req.body.name || !req.body.email || !req.body.password || !req.body.nickname) {
        throw new Error("Todos os campos precisam ser preenchidos (name, email, password e nickname).")
      }
      if (req.body.password.length < 6) {
        throw new Error("A senha precisa ter no mínimo 6 caracteres.")
      }

      const userData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        nickname: req.body.nickname,
      }

      const id = new IdGenerator().generateId();

      const hashManager = new HashManager();
      const hashPassword = await hashManager.hash(userData.password)

      const userBusiness = new UserBusiness();
      await userBusiness.signup(
        id,
        userData.name,
        userData.email,
        hashPassword,
        userData.nickname,
        1
      )

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

      res.status(200).send({
        access_token: accessToken,
        refresh_token: refreshToken
      })

    } catch (err) {
      res.status(400).send({ err: err.message })
    } finally {
      await BaseDataBase.destroyConnection();
    }
  }

  async admSignup(req: Request, res: Response) {
    try {
      if (!req.body.name || !req.body.email || !req.body.password || !req.body.nickname) {
        throw new Error("Todos os campos precisam ser preenchidos (name, email, password e nickname).")
      }
      if (req.body.password.length < 10) {
        throw new Error("A senha precisa ter no mínimo 10 caracteres.")
      }
      const admTokentToVerify = req.headers.authorization as string
      const token = new Authenticator().verify(admTokentToVerify)
      
      const teste = await new UserBusiness().admVerify(token.id)
      
      if(teste[0][0] == undefined) {
        throw new Error("Somente um perfil administrador pode criar outro administrador.")
      }

      if(!token) {
        throw new Error("Falha na autenticação.")
      }

      const userData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        nickname: req.body.nickname
      }

      const id = new IdGenerator().generateId();

      const hashManager = new HashManager();
      const hashPassword = await hashManager.hash(userData.password)

      const userBusiness = new UserBusiness();
      await userBusiness.admSignup(
        id,
        userData.name,
        userData.email,
        hashPassword,
        userData.nickname,
        1
      )

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

      res.status(200).send({
        access_token: accessToken,
        refresh_token: refreshToken
      })
      
    } catch (err) {
      res.status(400).send({ err: err.message })
    } finally {
      await BaseDataBase.destroyConnection();
    }
  };

  async bandSignup(req: Request, res: Response) {
    try {
      if (!req.body.name || !req.body.email || !req.body.password || !req.body.nickname) {
        throw new Error("Todos os campos precisam ser preenchidos (name, email, password e nickname).")
      }
      if (req.body.password.length < 6) {
        throw new Error("A senha precisa ter no mínimo 6 caracteres.")
      }

      const userData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        nickname: req.body.nickname,
        bandDescription: req.body.bandDescription
      }

      const id = new IdGenerator().generateId();

      const hashManager = new HashManager();
      const hashPassword = await hashManager.hash(userData.password)

      const userBusiness = new UserBusiness();
      await userBusiness.bandSignup(
        id,
        userData.name,
        userData.email,
        hashPassword,
        userData.nickname,
        userData.bandDescription,
        0
      )

      res.status(200).send('Banda cadastrada com sucesso! Aguarde a aprovação de um Adm.')

    } catch (err) {
      res.status(400).send({ err: err.message })
    } finally {
      await BaseDataBase.destroyConnection();
    }
  }

  async refreshToken(req: Request, res: Response) {
    try {
      const refreshToken = req.body.refreshToken;
      const device = req.body.device;

      const refreshTokenData = new Authenticator().verify(refreshToken);

      if (refreshTokenData.device !== device) {
        throw new Error("Wrong Device")
      }

      const accessToken = new Authenticator().generateToken({
        id: refreshTokenData.id
      }, process.env.ACCESS_TOKEN_EXPIRES_IN)

      res.status(200).send({
        accessToken
      })
    } catch (err) {
      res.status(400).send({ err: err.message })
    } finally {
      await BaseDataBase.destroyConnection();
    }
  }
}