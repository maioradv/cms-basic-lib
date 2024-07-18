import { BooleanClause, StringClause, WhereClausesDto } from "../core/dto/clauses";
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

export type CreateProductAttributeDto = OmitRequire<ProductAttribute,'id'|'createdAt'|'updatedAt'|'slug','name'>
export type UpdateProductAttributeDto = Partial<CreateProductAttributeDto>

export type CreateProductAttributeValueDto = OmitRequire<ProductAttributeValue,'id'|'createdAt'|'updatedAt'|'productAttributeId','name'>
export type UpdateProductAttributeValueDto = Partial<CreateProductAttributeValueDto>

export type SortingProductAttributeDto = SortingParamsDto<{
  name?:Sorting,
  published?:Sorting,
}>

export type ClausesProductAttributeDto = WhereClausesDto<{
  name?:StringClause,
  published?:BooleanClause,
}>

export type QueryProductAttributeDto = QueryParamsDto<SortingProductAttributeDto,ClausesProductAttributeDto>