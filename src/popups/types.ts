import { BooleanClause, StringClause, WhereClausesDto } from "../core/dto/clauses";
import { Sorting, SortingParamsDto } from "../core/dto/sorting";
import { QueryParamsDto } from "../core/utils/queryParams";
import { CreateImageDto, Image } from "../images/types";
import { Metafield, OmitRequire, Translation, WithRelation } from "../types";

export enum PopupTarget {
  menu = 'menu',
  menuDetail = 'menuDetail',
  collectionDetail = 'collectionDetail'
}

export enum PopupModal {
  image = 'image',
  text = 'text'
}

export enum PopupTriggerRule {
  eventName = 'eventName',
  timeoutDelay = 'timeoutDelay',
  maxViewsNumber = 'maxViewsNumber',
  elementDetailId = 'elementDetailId',
}

export type Popup = {
  id: number;
  name: string;
  target: PopupTarget;
  modal: PopupModal;
  translations: Translation[];
  metafields: Metafield[];
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type PopupImage = {
  popupId:number;
  imageId:number;
  locale:string|null;
  position:number|null;
  createdAt: Date;
  updatedAt: Date;
}

export type PopupTrigger = {
  id: number;
  name: string;
  rule: PopupTriggerRule;
  value: string;
  popupId: number;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type CreatePopupDto = OmitRequire<Popup,'id'|'createdAt'|'updatedAt','name'|'target'|'modal'> & {
  triggers?:CreatePopupTriggerDto[]
}
export type UpdatePopupDto = Partial<Omit<CreatePopupDto,'triggers'>>

export type CreatePopupImageDto = OmitRequire<PopupImage,'popupId'|'createdAt'|'updatedAt'|'imageId'> & CreateImageDto
export type UpdatePopupImageDto = Omit<CreatePopupImageDto,'file'>

export type CreatePopupTriggerDto = OmitRequire<PopupTrigger,'id'|'createdAt'|'updatedAt'|'popupId','name'|'rule'|'value'>
export type UpdatePopupTriggerDto = Partial<CreatePopupTriggerDto>

export type FindOnePopupDto = WithRelation<Popup,'PopupTrigger',WithRelation<PopupTrigger,'PopupImage',WithRelation<PopupImage,'Image',Image>[]>[]>

export type SortingPopupDto = SortingParamsDto<{
  name?:Sorting,
  published?:Sorting,
}>

export type ClausesPopupDto = WhereClausesDto<{
  name?:StringClause,
  published?:BooleanClause,
}>

export type QueryPopupDto = QueryParamsDto<SortingPopupDto,ClausesPopupDto>