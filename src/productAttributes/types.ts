import { BooleanClause, StringClause, WhereClausesDto, Sorting, SortingParamsDto, QueryParamsDto, NumberClause, ObjectClause } from "@maioradv/client-core";
import { Metafield, OmitRequire, Translation, WithRelation, WithRelations } from "@maioradv/types";

export type ProductAttribute = {
  id: number;
  name: string;
  slug: string;
  translations: Translation[];
  metafields: Metafield[];
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type ProductAttributeValue = {
  id: number;
  name: string;
  productAttributeId: number;
  translations: Translation[];
  metafields: Metafield[];
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateProductAttributeDto = OmitRequire<ProductAttribute,'id'|'createdAt'|'updatedAt'|'slug','name'> & {
  values?:CreateProductAttributeValueDto[]
}
export type UpdateProductAttributeDto = Partial<Omit<CreateProductAttributeDto,'values'>>

export type CreateProductAttributeValueDto = OmitRequire<ProductAttributeValue,'id'|'createdAt'|'updatedAt'|'productAttributeId','name'>
export type UpdateProductAttributeValueDto = Partial<CreateProductAttributeValueDto>

export type SortingProductAttributeDto = SortingParamsDto<{
  name?:Sorting,
  published?:Sorting,
}>

export type ClausesProductAttributeDto = WhereClausesDto<{
  name?:StringClause,
  published?:BooleanClause,
  slug?:StringClause|StringClause[]
}>

export type QueryProductAttributeDto = QueryParamsDto<SortingProductAttributeDto,ClausesProductAttributeDto>

export type SortingProductAttributeValueDto = SortingParamsDto<{
  name?:Sorting,
  published?:Sorting,
}>

export type ClausesProductAttributeValueDto = WhereClausesDto<{
  search?:StringClause,
  name?:StringClause,
  published?:BooleanClause,
  attributeSlug?:StringClause|StringClause[],
  productAttributeId?:NumberClause,
  collections?:NumberClause,
  bundles?:NumberClause,
  hasProducts?:BooleanClause,
  metafields?:ObjectClause<Partial<Metafield>>,
  translations?:ObjectClause<Partial<Translation>>
}>

export type QueryProductAttributeValueDto = QueryParamsDto<SortingProductAttributeValueDto,ClausesProductAttributeValueDto>