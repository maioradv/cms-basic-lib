import { PaginatedDto, PaginatedGQL } from "../core/dto/pagination";
import { RemoveGQL } from "../core/model/remove-gql.response";
import { queryParams } from "../core/utils/queryParams";
import { RestApiModuleI, ApiModule, GraphApiModuleI } from "../model";
import { QuerySettingGQLDto, SettingsResolvers } from "./graphql";
import { CreateSettingDto, QuerySettingDto, Setting, UpdateSettingDto } from "./types";

export default class Settings extends ApiModule implements RestApiModuleI, GraphApiModuleI {
  create(args:CreateSettingDto): Promise<Setting> {
    return this._call('post','/settings',args)
  }

  findAll(args:QuerySettingDto = {}): Promise<PaginatedDto<Setting>> {
    return this._call('get','/settings',queryParams(args))
  } 

  findOne(id:number): Promise<Setting> {
    return this._call('get',`/settings/${id}`)
  }

  update(id:number,data:UpdateSettingDto): Promise<Setting> {
    return this._call('patch',`/settings/${id}`,data)
  }

  remove(id:number): Promise<Setting> {
    return this._call('delete',`/settings/${id}`)
  }
  
  list(args:QuerySettingGQLDto = {}): Promise<PaginatedGQL<Setting>> {
    return this._graphql(SettingsResolvers.query.settings,args)
  }

  removeMany(id:number|number[]): Promise<RemoveGQL> {
    return this._graphql(SettingsResolvers.mutation.removeSettings,{
      id
    })
  }
}