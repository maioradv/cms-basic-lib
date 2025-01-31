import { BooleanClause, NumberClause, StringClause, WhereClausesDto } from "../core/dto/clauses";
import { Sorting, SortingParamsDto } from "../core/dto/sorting";
import { QueryParamsDto } from "../core/utils/queryParams";
import { Metafield, OmitRequire, Translation } from "../types";

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
  slug?:StringClause[]
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
  attributeSlug?:StringClause[],
  productAttributeId?:NumberClause
}>

export type QueryProductAttributeValueDto = QueryParamsDto<SortingProductAttributeValueDto,ClausesProductAttributeValueDto>