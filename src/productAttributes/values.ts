import { PaginatedGQL } from "../core/dto/pagination";
import { RemoveGQL } from "../core/model/remove-gql.response";
import { ApiModule, GraphApiModuleI } from "../model";
import { ProductAttributeValuesResolvers, QueryProductAttributeValueGQLDto } from "./graphql";
import { ProductAttributeValue, UpdateProductAttributeValueDto } from "./types";

export default class ProductAttributeValues extends ApiModule implements GraphApiModuleI {

  update(id:number,data:UpdateProductAttributeValueDto): Promise<ProductAttributeValue> {
    return this._call('patch',`/product-attribute-values/${id}`,data)
  }

  remove(id:number): Promise<ProductAttributeValue> {
    return this._call('delete',`/product-attribute-values/${id}`)
  }
  
  list(args:QueryProductAttributeValueGQLDto = {}): Promise<PaginatedGQL<ProductAttributeValue>> {
    return this._graphql(ProductAttributeValuesResolvers.query.productAttributeValues,args)
  }

  removeMany(id:number|number[]): Promise<RemoveGQL> {
    return this._graphql(ProductAttributeValuesResolvers.mutation.removeProductAttributeValues,{
      id
    })
  }
}