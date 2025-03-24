import { PaginatedDto, PaginatedGQL } from "../core/dto/pagination";
import { RemoveGQL } from "../core/model/remove-gql.response";
import { queryParams } from "../core/utils/queryParams";
import { RestApiModuleI, ApiModule, GraphApiModuleI } from "../model";
import { ApiTokensResolvers, QueryApiTokenGQLDto } from "./graphql";
import { ApiToken, CreateApiTokenDto, QueryApiTokenDto, UpdateApiTokenDto } from "./types";

export default class ApiTokens extends ApiModule implements RestApiModuleI, GraphApiModuleI {
  create(args:CreateApiTokenDto): Promise<ApiToken> {
    return this._call('post','/apitokens',args)
  }

  findAll(args:QueryApiTokenDto = {}): Promise<PaginatedDto<ApiToken>> {
    return this._call('get','/apitokens',queryParams(args))
  } 

  findOne(id:number): Promise<ApiToken> {
    return this._call('get',`/apitokens/${id}`)
  }

  update(id:number,data:UpdateApiTokenDto): Promise<ApiToken> {
    return this._call('patch',`/apitokens/${id}`,data)
  }

  remove(id:number): Promise<ApiToken> {
    return this._call('delete',`/apitokens/${id}`)
  }
  
  list(args:QueryApiTokenGQLDto = {}): Promise<PaginatedGQL<ApiToken>> {
    return this._graphql(ApiTokensResolvers.query.apiTokens,args)
  }

  removeMany(id:number|number[]): Promise<RemoveGQL> {
    return this._graphql(ApiTokensResolvers.mutation.removeApiTokens,{
      id
    })
  }

  syncPermissions(): Promise<ApiToken[]> {
    return this._graphql(ApiTokensResolvers.mutation.syncPermissionsApiTokens)
  }
}