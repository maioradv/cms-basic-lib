import { PaginatedDto, PaginatedGQL } from "../core/dto/pagination";
import { RemoveGQL } from "../core/model/remove-gql.response";
import { queryParams } from "../core/utils/queryParams";
import { RestApiModuleI, ApiModule, GraphApiModuleI } from "../model";
import { ProductAttributesResolvers, QueryProductAttributeGQLDto } from "./graphql";
import { CreateProductAttributeDto, CreateProductAttributeValueDto, ProductAttribute, ProductAttributeValue, QueryProductAttributeDto, UpdateProductAttributeDto } from "./types";

export default class ProductAttributes extends ApiModule implements RestApiModuleI, GraphApiModuleI {
  create(args:CreateProductAttributeDto): Promise<ProductAttribute> {
    return this._call('post','/product-attributes',args)
  }

  findAll(args:QueryProductAttributeDto = {}): Promise<PaginatedDto<ProductAttribute>> {
    return this._call('get','/product-attributes',queryParams(args))
  } 

  findOne(id:number): Promise<ProductAttribute> {
    return this._call('get',`/product-attributes/${id}`)
  }

  update(id:number,data:UpdateProductAttributeDto): Promise<ProductAttribute> {
    return this._call('patch',`/product-attributes/${id}`,data)
  }

  remove(id:number): Promise<ProductAttribute> {
    return this._call('delete',`/product-attributes/${id}`)
  }
  
  list(args:QueryProductAttributeGQLDto = {}): Promise<PaginatedGQL<ProductAttribute>> {
    return this._graphql(ProductAttributesResolvers.query.productAttributes,args)
  }

  removeMany(id:number|number[]): Promise<RemoveGQL> {
    return this._graphql(ProductAttributesResolvers.mutation.removeProductAttributes,{
      id
    })
  }

  createValue(attributeId:number,args:CreateProductAttributeValueDto): Promise<ProductAttributeValue> {
    return this._call('post',`/product-attributes/${attributeId}/attribute-values`,args)
  }

  findAllValues(attributeId:number): Promise<ProductAttributeValue[]> {
    return this._call('get',`/product-attributes/${attributeId}/attribute-values`)
  } 
}