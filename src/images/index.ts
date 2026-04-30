import { RestApiModuleI, ApiModule, GraphApiModuleI, PaginatedDto, PaginatedGQL, RemoveGQL, queryParams } from "@maioradv/client-core";
import { ImagesResolvers, QueryImageGQLDto } from "./graphql";
import { CreateImageDto, Image, QueryImageDto } from "./types";

export default class Images extends ApiModule {
  create(args:CreateImageDto): Promise<Image> {
    return this._call('post','/images',args,{
      headers:{
        'Content-Type':'multipart/form-data'
      }
    })
  }

  RNCreate(formData:any): Promise<Image> {
    return this._call('post',`/images`,formData,{
      headers:{
        'Content-Type':'multipart/form-data'
      }
    })
  }

  findAll(args:QueryImageDto = {}): Promise<PaginatedDto<Image>> {
    return this._call('get','/images',queryParams(args))
  } 

  findOne(id:number): Promise<Image> {
    return this._call('get',`/images/${id}`)
  }

  remove(id:number): Promise<Image> {
    return this._call('delete',`/images/${id}`)
  }
  
  list(args:QueryImageGQLDto = {}): Promise<PaginatedGQL<Image>> {
    return this._graphql(ImagesResolvers.query.images,args)
  }
}