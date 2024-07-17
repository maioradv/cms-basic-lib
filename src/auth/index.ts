import { ApiModule } from "../model";
import { AccessTokenDto, Jwt } from "./types";

export default class Auth extends ApiModule {
  jwt(accessToken:string): Promise<AccessTokenDto> {
    return this._call('post',`/auth/jwt/${accessToken}`)
  }

  token(apiToken:string): Promise<AccessTokenDto> {
    return this._call('post',`/auth/token/${apiToken}`)
  }

  me(): Promise<Jwt> {
    return this._call('get',`/auth/me`)
  }
}