import { BooleanClause, StringClause, WhereClausesDto, Sorting, SortingParamsDto, QueryParamsDto, NumberClause, ObjectClause, EnumClause } from "@maioradv/client-core";
import { Gid, Metadata, Metafield, OmitRequire, Translation, WithRelation, WithRelations } from "@maioradv/types";
import { CreateImageDto, Image } from "../images/types";

export enum PopupTarget {
  all = 'all',
  menu = 'menu',
  menuDetail = 'menuDetail',
  collectionDetail = 'collectionDetail'
}

export enum PopupModal {
  standard = 'standard',
  bgimage = 'bgimage'
}

export enum PopupTriggerRule {
  eventName = 'eventName',
  timeoutDelay = 'timeoutDelay',
  maxViewsNumber = 'maxViewsNumber',
  elementDetailId = 'elementDetailId',
  dayOfWeek = 'dayOfWeek',
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

export type PopupTriggerOptions = {
  /** The route pattern when the trigger is eventName:pageView @example /collections/* */
  route?:string;
  /** The global ID when the trigger is eventName:viewItem */
  gid?:Gid<'tidelizio'>,
  /** The reset views time in ms when the trigger is maxViewsNumber */
  resetCycle?:number,
}

export type PopupTrigger = {
  id: number;
  name: string;
  rule: PopupTriggerRule;
  options: PopupTriggerOptions;
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

export type CreatePopupTriggerDto = OmitRequire<PopupTrigger,'id'|'createdAt'|'updatedAt'|'popupId','rule'|'value'>
export type UpdatePopupTriggerDto = Partial<CreatePopupTriggerDto>

export type FindOnePopupDto = WithRelations<Popup,{
  PopupTrigger:PopupTrigger[],
  PopupImage:WithRelation<PopupImage,'Image',Image>[]
}>

export type SortingPopupDto = SortingParamsDto<{
  name?:Sorting,
  published?:Sorting,
}>

export type ClausesPopupDto = WhereClausesDto<{
  search?:StringClause,
  name?:StringClause,
  published?:BooleanClause,
  target?:EnumClause<PopupTarget>,
  metafields?:ObjectClause<Partial<Metafield>>,
  translations?:ObjectClause<Partial<Translation>>
}>

export type QueryPopupDto = QueryParamsDto<SortingPopupDto,ClausesPopupDto>

export type FindAllPopupImagesDto = WithRelation<PopupImage,'Image',Image>[]