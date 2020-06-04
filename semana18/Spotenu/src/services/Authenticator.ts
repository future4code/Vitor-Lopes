import * as jwt from 'jsonwebtoken';

export class Authenticator {
    public generateToken(
        data: AuthenticationData,
        expiresIn: string = process.env.ACCES_TOKEN_EXPIRES_IN!
    ): string {
        return jwt.sign(data, process.env.JWT_KEY as string,{
            expiresIn
        })
    };

    public verify(token: string): AuthenticationData {
        const data = jwt.verify(
            token,
            process.env.JWT_KEY as string,
        ) as any

        return {
            id: data.id
        }
    }
}

export interface AuthenticationData {
    id:string,
    device?: string
}