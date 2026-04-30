import { RestApiModuleI, ApiModule, GraphApiModuleI, PaginatedDto, PaginatedGQL, RemoveGQL, queryParams } from "@maioradv/client-core";
import { ConfigsResolvers, QueryConfigGQLDto } from "./graphql";
import { TiDelizioConfig, TiDelizioPlan } from "./service";
import { Config, CreateConfigDto, PutConfigDto, QueryConfigDto, UpdateConfigDto } from "./types";

export default class Configs extends ApiModule implements RestApiModuleI, GraphApiModuleI {
  create(args:CreateConfigDto): Promise<Config> {
    return this._call('post','/configs',args)
  }

  put(args:PutConfigDto): Promise<Config> {
    return this._call('put','/configs',args)
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

  findByName(name:string): Promise<Config> {
    return this._call('get',`/configs/name/${name}`)
  }

  removeByName(name:string): Promise<Config> {
    return this._call('delete',`/configs/name/${name}`)
  }
  
  list(args:QueryConfigGQLDto = {}): Promise<PaginatedGQL<Config>> {
    return this._graphql(ConfigsResolvers.query.configs,args)
  }

  removeMany(id:number|number[]): Promise<RemoveGQL> {
    return this._graphql(ConfigsResolvers.mutation.removeConfigs,{
      id
    })
  }

  Config(): Promise<TiDelizioConfig> {
    return this._graphql(ConfigsResolvers.query.Config)
  }

  initConfig(plan:TiDelizioPlan,config?:TiDelizioConfig): Promise<Config[]> {
    return this._graphql(ConfigsResolvers.mutation.initConfig,{plan,config})
  }
}