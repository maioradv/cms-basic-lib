import { ApiModule } from "../model";
import { ProductVariant, UpdateProductVariantDto } from "../products/types";

export default class ProductVariants extends ApiModule {

  findOne(id:number): Promise<ProductVariant> {
    return this._call('get',`/product-variants/${id}`)
  }
  
  update(id:number,data:UpdateProductVariantDto): Promise<ProductVariant> {
    return this._call('patch',`/product-variants/${id}`,data)
  }

  remove(id:number): Promise<ProductVariant> {
    return this._call('delete',`/product-variants/${id}`)
  }
}