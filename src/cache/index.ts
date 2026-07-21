import { RestApiModuleI, ApiModule, GraphApiModuleI, PaginatedDto, PaginatedGQL, BulkResponse, queryParams } from "@maioradv/client-core";

export default class Cache extends ApiModule {
  reset(): Promise<void> {
    return this._call('post','/cache')
  }
}