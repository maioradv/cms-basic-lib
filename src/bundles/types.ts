import { Collection } from "../collections/types";
import { BooleanClause, NumberClause, StringClause, WhereClausesDto } from "../core/dto/clauses";
import { Sorting, SortingParamsDto } from "../core/dto/sorting";
import { QueryParamsDto } from "../core/utils/queryParams";
import { CreateImageDto, Image } from "../images/types";
import { ProductAttribute, ProductAttributeValue } from "../productAttributes/types";
import { Product } from "../products/types";
import { Metafield, OmitRequire, Translation, WithRelation, WithRelations } from "../types";

export type Bundle = {
  id:number;
  slug: string;
  title: string;
  subtitle: string|null;
  description: string|null;
  tags: string[];
  translations: Translation[];
  metafields: Metafield[];
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type BundleVariant = {
  id: number;
  description: string|null;
  translations: Translation[];
  price: number|null;
  fullPrice: number|null;
  bundleId: number;
  published: boolean;
  position:number|null;
  createdAt: Date;
  updatedAt: Date;
}

export type BundleCollection = {
  bundleId:number;
  collectionId:number;
  position: number|null;
  createdAt: Date;
  updatedAt: Date;
}

export type BundleProduct = {
  productId: number;
  bundleId: number;
  position: number|null;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateBundleCollectionDto = OmitRequire<BundleCollection,'createdAt'|'updatedAt','collectionId'|'bundleId'>

export type CreateBundleDto = OmitRequire<Bundle,'id'|'createdAt'|'updatedAt'|'slug','title'> & {
  products?:number[],
  collections?:number[],
  variants?:CreateBundleVariantDto[]
}
export type UpdateBundleDto = Partial<CreateBundleDto> & {
  removeProducts?:number[],
  removeVariants?:number[],
  removeCollections?:number[],
}

export type CreateBundleVariantDto = OmitRequire<BundleVariant,'id'|'createdAt'|'updatedAt'|'bundleId'>
export type UpdateBundleVariantDto = Partial<CreateBundleVariantDto>

export type FindAllBundleDto = WithRelations<Bundle,{
  BundleVariant:BundleVariant[],
}>
export type FindOneBundleDto = WithRelations<Bundle,{
  BundleProduct:WithRelation<BundleProduct,'Product',Product>[],
  BundleVariant:BundleVariant[],
  BundleCollection:WithRelation<BundleCollection,'Collection',Collection>[]
}>

export type SortingBundleDto = SortingParamsDto<{
  title?:Sorting,
  published?:Sorting,
}>

export type ClausesBundleDto = WhereClausesDto<{
  search?:StringClause,
  title?:StringClause,
  subtitle?:StringClause,
  description?:StringClause,
  collectionId?:NumberClause,
  published?:BooleanClause,
  noCollections?:BooleanClause
}>

export type QueryBundleDto = QueryParamsDto<SortingBundleDto,ClausesBundleDto>