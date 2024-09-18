import { Collection } from "../collections/types";
import { BooleanClause, NumberClause, StringClause, WhereClausesDto } from "../core/dto/clauses";
import { Sorting, SortingParamsDto } from "../core/dto/sorting";
import { QueryParamsDto } from "../core/utils/queryParams";
import { CreateImageDto, Image } from "../images/types";
import { ProductAttribute, ProductAttributeValue } from "../productAttributes/types";
import { Metafield, OmitRequire, Translation, WithRelation, WithRelations } from "../types";

export type Product = {
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

export type ProductVariant = {
  id: number;
  description: string|null;
  translations: Translation[];
  price: number|null;
  fullPrice: number|null;
  productId: number;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type ProductCollection = {
  productId:number;
  collectionId:number;
  position: number|null;
  createdAt: Date;
  updatedAt: Date;
}

export type ProductImage = {
  productId:number;
  imageId:number;
  locale:string|null;
  position:number|null;
  createdAt: Date;
  updatedAt: Date;
}

export type ProductAttributeValueProduct = {
  productId: number;
  productAttributeValueId: number;
  position: number|null;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateProductCollectionDto = OmitRequire<ProductCollection,'createdAt'|'updatedAt','collectionId'|'productId'>

export type CreateProductDto = OmitRequire<Product,'id'|'createdAt'|'updatedAt'|'slug','title'> & {
  attributes?:number[],
  collections?:number[],
  variants?:CreateProductVariantDto[]
}
export type UpdateProductDto = Partial<CreateProductDto> & {
  removeAttributes?:number[],
  removeVariants?:number[],
  removeCollections?:number[]
}

export type CreateProductImageDto = OmitRequire<ProductImage,'productId'|'createdAt'|'updatedAt'|'imageId'> & CreateImageDto
export type UpdateProductImageDto = Omit<CreateProductImageDto,'file'>

export type CreateProductVariantDto = OmitRequire<ProductVariant,'id'|'createdAt'|'updatedAt'|'productId'>
export type UpdateProductVariantDto = Partial<CreateProductVariantDto>

export type CreateCollectionOnProductDto = Omit<CreateProductCollectionDto,'productId'>

export type CreateProductAttributeValueProductDto = OmitRequire<ProductAttributeValueProduct,'productId'|'createdAt'|'updatedAt'|'position'>

export type FindAllProductDto = WithRelation<Product,'ProductImage',WithRelation<ProductImage,'Image',Image>[]>
export type AttributeValueProduct = WithRelations<ProductAttributeValueProduct,{
  ProductAttributeValue:WithRelation<ProductAttributeValue,'ProductAttribute',ProductAttribute>
}>
export type FindOneProductDto = WithRelations<Product,{
  attributes:AttributeValueProduct[],
  ProductVariant:ProductVariant[],
  ProductImage:WithRelation<ProductImage,'Image',Image>[],
  ProductCollection:WithRelation<ProductCollection,'Collection',Collection>[]
}>

export type SortingProductDto = SortingParamsDto<{
  title?:Sorting,
  published?:Sorting,
}>

export type ClausesProductDto = WhereClausesDto<{
  search?:StringClause,
  title?:StringClause,
  subtitle?:StringClause,
  description?:StringClause,
  collectionId?:NumberClause,
  attributes?:NumberClause,
  published?:BooleanClause,
}>

export type QueryProductDto = QueryParamsDto<SortingProductDto,ClausesProductDto>