import { RestApiModuleI, ApiModule, GraphApiModuleI, PaginatedDto, PaginatedGQL, RemoveGQL, queryParams } from "@maioradv/client-core";
import { QuerySecretGQLDto, SecretsResolvers } from "./graphql";
import { CreateSecretDto, PutSecretDto, QuerySecretDto, Secret, UpdateSecretDto } from "./types";

export default class Secrets extends ApiModule implements RestApiModuleI, GraphApiModuleI {
  create(args:CreateSecretDto): Promise<Secret> {
    return this._call('post','/secrets',args)
  }

  put(args:PutSecretDto): Promise<Secret> {
    return this._call('put','/secrets',args)
  }

  findAll(args:QuerySecretDto = {}): Promise<PaginatedDto<Secret>> {
    return this._call('get','/secrets',queryParams(args))
  } 

  findOne(id:number): Promise<Secret> {
    return this._call('get',`/secrets/${id}`)
  }

  update(id:number,data:UpdateSecretDto): Promise<Secret> {
    return this._call('patch',`/secrets/${id}`,data)
  }

  remove(id:number): Promise<Secret> {
    return this._call('delete',`/secrets/${id}`)
  }

  findByKey(namespace:string,name:string): Promise<Secret> {
    return this._call('get',`/secrets/${namespace}/${name}`)
  }

  removeByKey(namespace:string,name:string): Promise<Secret> {
    return this._call('delete',`/secrets/${namespace}/${name}`)
  }
  
  list(args:QuerySecretGQLDto = {}): Promise<PaginatedGQL<Secret>> {
    return this._graphql(SecretsResolvers.query.secrets,args)
  }

  removeMany(id:number|number[]): Promise<RemoveGQL> {
    return this._graphql(SecretsResolvers.mutation.removeSecrets,{
      id
    })
  }
}