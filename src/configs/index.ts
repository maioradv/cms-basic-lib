import { PaginatedDto, PaginatedGQL } from "../core/dto/pagination";
import { RemoveGQL } from "../core/model/remove-gql.response";
import { queryParams } from "../core/utils/queryParams";
import { RestApiModuleI, ApiModule, GraphApiModuleI } from "../model";
import { ConfigsResolvers, QueryConfigGQLDto } from "./graphql";
import { Config, CreateConfigDto, QueryConfigDto, UpdateConfigDto } from "./types";

export default class Configs extends ApiModule implements RestApiModuleI, GraphApiModuleI {
  create(args:CreateConfigDto): Promise<Config> {
    return this._call('post','/configs',args)
  }

  findAll(args:QueryConfigDto= {}): Promise<PaginatedDto<Config>> {
    return this._call('get','/configs',queryParams(args))
  } 

  findOne(id:number): Promise<Config> {
    return this._call('get',`/configs/${id}`)
  }

  update(id:number,data:UpdateConfigDto): Promise<Config> {
    return this._call('patch',`/configs/${id}`,data)
  }

  remove(id:number): Promise<Config> {
    return this._call('delete',`/configs/${id}`)
  }
  
  list(args:QueryConfigGQLDto = {}): Promise<PaginatedGQL<Config>> {
    return this._graphql(ConfigsResolvers.query.configs,args)
  }

  removeMany(id:number|number[]): Promise<RemoveGQL> {
    return this._graphql(ConfigsResolvers.mutation.removeConfigs,{
      id
    })
  }
}