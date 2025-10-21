import { ApiModule } from "../model";
import { AccessTokenDto, Jwt } from "./types";

export default class Auth extends ApiModule {
  jwt(token:string): Promise<AccessTokenDto> {
    return this._call('post',`/auth/jwt`,{token})
  }

  token(token:string): Promise<AccessTokenDto> {
    return this._call('post',`/auth/token`,{token})
  }

  me(): Promise<Jwt> {
    return this._call('get',`/auth/me`)
  }
}