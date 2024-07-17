import { BooleanClause, NumberClause, StringClause, WhereClausesDto } from "../core/dto/clauses";
import { Sorting, SortingParamsDto } from "../core/dto/sorting";
import { QueryParamsDto } from "../core/utils/queryParams";
import { CreateImageDto, Image } from "../images/types";
import { CreateProductCollectionDto, Product, ProductCollection, ProductImage } from "../products/types";
import { Metafield, OmitRequire, Translation, WithRelation } from "../types";

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
  locale:string|null;
  position:number|null;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateCollectionDto = OmitRequire<Collection,'id'|'createdAt'|'updatedAt'|'slug','title'> & {
  products?:number[];
}
export type UpdateCollectionDto = Partial<Omit<CreateCollectionDto,'products'>>

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
export type FindAllCollectionDto = WithRelation<Collection,'CollectionImage',WithRelation<CollectionImage,'Image',Image>[]>
export type CreateCollectionImageDto = OmitRequire<CollectionImage,'collectionId'|'createdAt'|'updatedAt'|'imageId'> & CreateImageDto
export type UpdateCollectionImageDto = Omit<CreateCollectionImageDto,'file'>
export type CreateProductOnCollectionDto = Omit<CreateProductCollectionDto,'collectionId'>
export type FindAllCollectionProductsDto = WithRelation<ProductCollection,'Product',WithRelation<Product,'ProductImage',WithRelation<ProductImage,'Image',Image>[]>>
export type QueryCollectionProductsDto = Omit<QueryParamsDto<
    SortingParamsDto<{}>,
    WhereClausesDto<{
      productAttributeValueId?:NumberClause,
    }>
  >,'sorting'>