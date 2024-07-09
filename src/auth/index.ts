import { ApiModule } from "../model";
import { AccessTokenDto, Jwt } from "./types";

export default class Auth extends ApiModule {
  jwt(accessToken:string): Promise<AccessTokenDto> {
    return this._call<AccessTokenDto>('post',`/auth/jwt/${accessToken}`)
  }

  token(apiToken:string): Promise<AccessTokenDto> {
    return this._call<AccessTokenDto>('post',`/auth/token/${apiToken}`)
  }

  me(): Promise<Jwt> {
    return this._call<Jwt>('get',`/auth/me`)
  }
}