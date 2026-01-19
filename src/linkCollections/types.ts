import { Bundle, BundleCollection, BundleProduct, BundleVariant } from "../bundles/types";
import { BooleanClause, NumberClause, StringClause, WhereClausesDto } from "../core/dto/clauses";
import { Sorting, SortingParamsDto } from "../core/dto/sorting";
import { QueryParamsDto } from "../core/utils/queryParams";
import { CreateImageDto, Image } from "../images/types";
import { CreateProductCollectionDto, Product, ProductCollection, ProductImage, ProductVariant } from "../products/types";
import { Metafield, OmitRequire, Translation, WithRelation, WithRelations } from "../types";

export type LinkCollection = {
  id: number;
  title: string;
  subtitle: string|null;
  description: string|null;
  translations: Translation[];
  metafields: Metafield[];
  published:boolean;
  position:number|null;
  createdAt: Date;
  updatedAt: Date;
}

export type Link = {
  id: number;
  src: string;
  title: string|null;
  subtitle: string|null;
  description: string|null;
  translations: Translation[];
  metafields: Metafield[];
  published:boolean;
  position:number|null;
  linkCollectionId:number;
  createdAt: Date;
  updatedAt: Date;
}

export type LinkImage = {
  linkId:number;
  imageId:number;
  locale:string|null;
  position:number|null;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateLinkDto = OmitRequire<Link,'id'|'createdAt'|'updatedAt'|'linkCollectionId','src'>

export type CreateLinkCollectionDto = OmitRequire<LinkCollection,'id'|'createdAt'|'updatedAt','title'> & {
  links?:CreateLinkDto[];
}
export type UpdateLinkCollectionDto = Partial<Omit<CreateLinkCollectionDto,'links'>>
export type UpdateLinkDto = Partial<CreateLinkDto>

export type SortingLinkCollectionDto = SortingParamsDto<{
  title?:Sorting,
  published?:Sorting,
  position?:Sorting,
}>

export type SortingLinkDto = SortingParamsDto<{
  title?:Sorting,
  published?:Sorting,
  position?:Sorting,
}>

export type ClausesLinkCollectionDto = WhereClausesDto<{
  search?:StringClause,
  published?:BooleanClause,
}>

export type ClausesLinkDto = WhereClausesDto<{
  search?:StringClause,
  linkCollectionId?:NumberClause,
  published?:BooleanClause,
}>

export type QueryLinkCollectionDto = QueryParamsDto<SortingLinkCollectionDto,ClausesLinkCollectionDto>
export type QueryLinkDto = QueryParamsDto<SortingLinkDto,ClausesLinkDto>
export type FindOneLinkCollectionDto = WithRelations<LinkCollection,{
  Link: Link[],
}>
export type FindAllLinkDto = WithRelations<Link,{
  LinkImage:WithRelation<LinkImage,'Image',Image>[],
}>
export type FindOneLinkDto = WithRelations<Link,{
  LinkImage:WithRelation<LinkImage,'Image',Image>[],
}>

export type CreateLinkImageDto = OmitRequire<LinkImage,'linkId'|'createdAt'|'updatedAt'|'imageId'> & CreateImageDto
export type UpdateLinkImageDto = Omit<CreateLinkImageDto,'file'>

export type FindAllLinkImageDto = WithRelation<LinkImage,'Image',Image>[]