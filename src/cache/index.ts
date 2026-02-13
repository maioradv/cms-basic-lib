import { ApiModule } from "../model";

export default class Cache extends ApiModule {
  reset(): Promise<void> {
    return this._call('post','/cache')
  }
}