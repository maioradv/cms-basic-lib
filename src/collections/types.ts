import { BooleanClause, NumberClause, StringClause, WhereClausesDto } from "../core/dto/clauses";
import { Sorting, SortingParamsDto } from "../core/dto/sorting";
import { QueryParamsDto } from "../core/utils/queryParams";
import { Metafield, OmitRequire, Translation, WithRequired } from "../types";

export type Collection = {
  id: number;
  slug: string;
  title: string;
  subtitle: string|null;
  description: string|null;
  translations: Translation[];
  metafields: Metafield[];
  published:boolean;
  position:number|null;
  allowChildren:boolean;
  parentId:number|null;
  createdAt: Date;
  updatedAt: Date;
}

export type CollectionImage = {
  collectionId:number;
  imageId:number;
  locale:string;
  position:number|null;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateCollection = OmitRequire<Collection,'id'|'createdAt'|'updatedAt'|'slug','title'> & {
  products?:number[];
}
export type UpdateCollection = Partial<Omit<CreateCollection,'products'>>

export type SortingCollectionDto = SortingParamsDto<{
  title?:Sorting,
  published?:Sorting,
  position?:Sorting,
}>

export type ClausesCollectionDto = WhereClausesDto<{
  title?:StringClause,
  subtitle?:StringClause,
  description?:StringClause,
  parentId?:NumberClause,
  productId?:NumberClause,
  published?:BooleanClause,
  noParents?:BooleanClause,
  allowChildren?:BooleanClause,
}>

export type QueryCollectionDto = QueryParamsDto<SortingCollectionDto,ClausesCollectionDto>