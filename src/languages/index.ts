import { PaginatedDto, PaginatedGQL } from "../core/dto/pagination";
import { RemoveGQL } from "../core/model/remove-gql.response";
import { queryParams } from "../core/utils/queryParams";
import { RestApiModuleI, ApiModule, GraphApiModuleI } from "../model";
import { LanguagesResolvers, QueryLanguageGQLDto } from "./graphql";
import { CreateLanguageDto, Language, QueryLanguageDto, UpdateLanguageDto } from "./types";

export default class Languages extends ApiModule implements RestApiModuleI, GraphApiModuleI {
  create(args:CreateLanguageDto): Promise<Language> {
    return this._call('post','/languages',args)
  }

  findAll(args:QueryLanguageDto = {}): Promise<PaginatedDto<Language>> {
    return this._call('get','/languages',queryParams(args))
  } 

  findOne(id:number): Promise<Language> {
    return this._call('get',`/languages/${id}`)
  }

  update(id:number,data:UpdateLanguageDto): Promise<Language> {
    return this._call('patch',`/languages/${id}`,data)
  }

  remove(id:number): Promise<Language> {
    return this._call('delete',`/languages/${id}`)
  }
  
  list(args:QueryLanguageGQLDto = {}): Promise<PaginatedGQL<Language>> {
    return this._graphql(LanguagesResolvers.query.languages,args)
  }

  removeMany(id:number|number[]): Promise<RemoveGQL> {
    return this._graphql(LanguagesResolvers.mutation.removeLanguages,{
      id
    })
  }
}