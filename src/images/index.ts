import { PaginatedDto, PaginatedGQL } from "../core/dto/pagination";
import { RemoveGQL } from "../core/model/remove-gql.response";
import { queryParams } from "../core/utils/queryParams";
import { RestApiModuleI, ApiModule, GraphApiModuleI } from "../model";
import { ImagesResolvers, QueryImageGQLDto } from "./graphql";
import { CreateImageDto, Image, QueryImageDto } from "./types";

export default class Images extends ApiModule {
  create(args:CreateImageDto): Promise<Image> {
    return this._call<Image>('post','/images',args,{
      headers:{
        'Content-Type':'multipart/form-data'
      }
    })
  }

  findAll(args:QueryImageDto = {}): Promise<PaginatedDto<Image>> {
    return this._call<PaginatedDto<Image>>('get','/images',queryParams(args))
  } 

  findOne(id:number): Promise<Image> {
    return this._call<Image>('get',`/images/${id}`)
  }

  remove(id:number): Promise<Image> {
    return this._call<Image>('delete',`/images/${id}`)
  }
  
  list(args:QueryImageGQLDto = {}): Promise<PaginatedGQL<Image>> {
    return this._graphql<PaginatedGQL<Image>>(ImagesResolvers.query.images,args)
  }
}