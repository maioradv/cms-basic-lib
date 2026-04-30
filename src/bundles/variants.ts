import { RestApiModuleI, ApiModule, GraphApiModuleI, PaginatedDto, PaginatedGQL, RemoveGQL, queryParams } from "@maioradv/client-core";
import { BundleVariant, UpdateBundleVariantDto } from "./types";

export default class BundleVariants extends ApiModule {
  findOne(id:number): Promise<BundleVariant> {
    return this._call('get',`/bundle-variants/${id}`)
  }
  
  update(id:number,data:UpdateBundleVariantDto): Promise<BundleVariant> {
    return this._call('patch',`/bundle-variants/${id}`,data)
  }

  remove(id:number): Promise<BundleVariant> {
    return this._call('delete',`/bundle-variants/${id}`)
  }
}