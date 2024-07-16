import { PaginatedDto, PaginatedGQL } from "../core/dto/pagination";
import { RemoveGQL } from "../core/model/remove-gql.response";
import { queryParams } from "../core/utils/queryParams";
import { RestApiModuleI, ApiModule, GraphApiModuleI } from "../model";
import { ApiTokensResolvers, QueryApiTokenGQLDto } from "./graphql";
import { ApiToken, CreateApiToken, QueryApiTokenDto, UpdateApiToken } from "./types";

export default class ApiTokens extends ApiModule implements RestApiModuleI, GraphApiModuleI {
  create(args:CreateApiToken): Promise<ApiToken> {
    return this._call<ApiToken>('post','/apitokens',args)
  }

  findAll(args:QueryApiTokenDto = {}): Promise<PaginatedDto<ApiToken>> {
    return this._call<PaginatedDto<ApiToken>>('get','/apitokens',queryParams(args))
  } 

  findOne(id:number): Promise<ApiToken> {
    return this._call<ApiToken>('get',`/apitokens/${id}`)
  }

  update(id:number,data:UpdateApiToken): Promise<ApiToken> {
    return this._call<ApiToken>('patch',`/apitokens/${id}`,data)
  }

  remove(id:number): Promise<ApiToken> {
    return this._call<ApiToken>('delete',`/apitokens/${id}`)
  }
  
  list(args:QueryApiTokenGQLDto = {}): Promise<PaginatedGQL<ApiToken>> {
    return this._graphql<PaginatedGQL<ApiToken>>(ApiTokensResolvers.query.apiTokens,args)
  }

  removeMany(id:number|number[]): Promise<RemoveGQL> {
    return this._graphql<RemoveGQL>(ApiTokensResolvers.mutation.removeApiToken,{
      id
    })
  }
}