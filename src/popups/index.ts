import { PaginatedDto, PaginatedGQL } from "../core/dto/pagination";
import { RemoveGQL } from "../core/model/remove-gql.response";
import { queryParams } from "../core/utils/queryParams";
import { Image } from "../images/types";
import { RestApiModuleI, ApiModule, GraphApiModuleI } from "../model";
import { WithRelation } from "../types";
import { PopupsResolvers, QueryPopupGQLDto } from "./graphql";
import { CreatePopupDto, CreatePopupImageDto, CreatePopupTriggerDto, FindOnePopupDto, Popup, PopupImage, PopupTrigger, QueryPopupDto, UpdatePopupDto, UpdatePopupImageDto, UpdatePopupTriggerDto } from "./types";

export default class Popups extends ApiModule implements RestApiModuleI, GraphApiModuleI {
  create(args:CreatePopupDto): Promise<Popup> {
    return this._call('post','/popups',args)
  }

  findAll(args:QueryPopupDto = {}): Promise<PaginatedDto<Popup>> {
    return this._call('get','/popups',queryParams(args))
  } 

  findOne(id:number): Promise<FindOnePopupDto> {
    return this._call('get',`/popups/${id}`)
  }

  update(id:number,data:UpdatePopupDto): Promise<Popup> {
    return this._call('patch',`/popups/${id}`,data)
  }

  remove(id:number): Promise<Popup> {
    return this._call('delete',`/popups/${id}`)
  }
  
  list(args:QueryPopupGQLDto = {}): Promise<PaginatedGQL<Popup>> {
    return this._graphql(PopupsResolvers.query.popups,args)
  }

  removeMany(id:number|number[]): Promise<RemoveGQL> {
    return this._graphql(PopupsResolvers.mutation.removePopups,{
      id
    })
  }

  createImage(popupId:number,args?:CreatePopupImageDto,formData?:FormData): Promise<PopupImage> {
    return this._call('post',`/popups/${popupId}/images`,args ?? formData,{
      headers:{
        'Content-Type':'multipart/form-data'
      }
    })
  }

  findAllImages(popupId:number): Promise<WithRelation<PopupImage,'Image',Image>[]> {
    return this._call('get',`/popups/${popupId}/images`)
  } 

  updateImage(popupId:number,imageId:number,data:UpdatePopupImageDto): Promise<PopupImage> {
    return this._call('patch',`/popups/${popupId}/images/${imageId}`,data)
  }

  removeImage(popupId:number,imageId:number): Promise<PopupImage> {
    return this._call('delete',`/popups/${popupId}/images/${imageId}`)
  }

  createTrigger(popupId:number,args:CreatePopupTriggerDto): Promise<PopupTrigger> {
    return this._call('post',`/popups/${popupId}/triggers`,args)
  }

  findAllTriggers(popupId:number): Promise<PopupTrigger[]> {
    return this._call('get',`/popups/${popupId}/triggers`)
  } 
}