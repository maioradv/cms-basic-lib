import { PaginatedDto } from "../core/dto/pagination";
import { queryParams } from "../core/utils/queryParams";
import { ApiModule } from "../model";
import { CreateLinkImageDto, FindAllLinkDto, FindAllLinkImageDto, FindOneLinkDto, Link, LinkImage, QueryLinkDto, UpdateLinkDto, UpdateLinkImageDto } from "./types";

export default class Links extends ApiModule {
  findAll(args:QueryLinkDto = {}): Promise<PaginatedDto<FindAllLinkDto>> {
    return this._call('get','/links',queryParams(args))
  } 

  findOne(id:number): Promise<FindOneLinkDto> {
    return this._call('get',`/links/${id}`)
  }

  update(id:number,data:UpdateLinkDto): Promise<Link> {
    return this._call('patch',`/links/${id}`,data)
  }

  remove(id:number): Promise<Link> {
    return this._call('delete',`/links/${id}`)
  }

  createImage(linkId:number,args:CreateLinkImageDto): Promise<LinkImage> {
    return this._call('post',`/links/${linkId}/images`,args,{
      headers:{
        'Content-Type':'multipart/form-data'
      }
    })
  }

  RNCreateImage(linkId:number,formData:any): Promise<LinkImage> {
    return this._call('post',`/links/${linkId}/images`,formData,{
      headers:{
        'Content-Type':'multipart/form-data'
      }
    })
  }

  findAllImages(linkId:number): Promise<FindAllLinkImageDto> {
    return this._call('get',`/links/${linkId}/images`)
  } 

  updateImage(linkId:number,imageId:number,data:UpdateLinkImageDto): Promise<LinkImage> {
    return this._call('patch',`/links/${linkId}/images/${imageId}`,data)
  }

  removeImage(linkId:number,imageId:number): Promise<LinkImage> {
    return this._call('delete',`/links/${linkId}/images/${imageId}`)
  }
}