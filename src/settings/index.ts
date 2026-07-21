import { RestApiModuleI, ApiModule, GraphApiModuleI, PaginatedDto, PaginatedGQL, BulkResponse, queryParams } from "@maioradv/client-core";
import { InitNotificationsDto, QuerySettingGQLDto, SettingsResolvers } from "./graphql";
import { CreateSettingDto, PutSettingDto, QuerySettingDto, Setting, UpdateSettingDto } from "./types";

export default class Settings extends ApiModule implements RestApiModuleI, GraphApiModuleI {
  create(args:CreateSettingDto): Promise<Setting> {
    return this._call('post','/settings',args)
  }

  put(args:PutSettingDto): Promise<Setting> {
    return this._call('put','/settings',args)
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

  findByKey(namespace:string,name:string): Promise<Setting> {
    return this._call('get',`/settings/${namespace}/${name}`)
  }

  removeByKey(namespace:string,name:string): Promise<Setting> {
    return this._call('delete',`/settings/${namespace}/${name}`)
  }
  
  list(args:QuerySettingGQLDto = {}): Promise<PaginatedGQL<Setting>> {
    return this._graphql(SettingsResolvers.query.settings,args)
  }

  removeMany(id:number|number[]): Promise<BulkResponse> {
    return this._graphql(SettingsResolvers.mutation.removeSettings,{
      id
    })
  }

  initNotifications(args:InitNotificationsDto): Promise<Setting[]> {
    return this._graphql(SettingsResolvers.mutation.initNotifications,args)
  }
}