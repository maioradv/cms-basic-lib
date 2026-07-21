import { RestApiModuleI, ApiModule, GraphApiModuleI, PaginatedDto, PaginatedGQL, BulkResponse, queryParams } from "@maioradv/client-core";
import { ArgsUpdateBundleProductsDto, BundlesResolvers, FindAllBundleGQLDto, QueryBundleGQLDto } from "./graphql";
import { Bundle, BundleProduct, BundleVariant, CreateBundleDto, CreateBundleVariantDto, FindAllBundleDto, FindOneBundleDto, QueryBundleDto, UpdateBundleDto } from "./types";

export default class Bundles extends ApiModule implements RestApiModuleI, GraphApiModuleI {
  create(args:CreateBundleDto): Promise<Bundle> {
    return this._call('post','/bundles',args)
  }

  findAll(args:QueryBundleDto = {}): Promise<PaginatedDto<FindAllBundleDto>> {
    return this._call('get','/bundles',queryParams(args))
  } 

  findOne(id:number): Promise<FindOneBundleDto> {
    return this._call('get',`/bundles/${id}`)
  }

  update(id:number,data:UpdateBundleDto): Promise<Bundle> {
    return this._call('patch',`/bundles/${id}`,data)
  }

  remove(id:number): Promise<Bundle> {
    return this._call('delete',`/bundles/${id}`)
  }
  
  list(args:QueryBundleGQLDto = {}): Promise<PaginatedGQL<FindAllBundleGQLDto>> {
    return this._graphql(BundlesResolvers.query.bundles,args)
  }

  removeMany(id:number|number[]): Promise<BulkResponse> {
    return this._graphql(BundlesResolvers.mutation.removeBundles,{
      id
    })
  }

  createVariant(bundleId:number,args:CreateBundleVariantDto): Promise<BundleVariant> {
    return this._call('post',`/bundles/${bundleId}/variants`,args)
  }

  findAllVariants(bundleId:number): Promise<BundleVariant[]> {
    return this._call('get',`/bundles/${bundleId}/variants`)
  } 

  updateBundleProducts(args:ArgsUpdateBundleProductsDto): Promise<BundleProduct[]> {
    return this._graphql(BundlesResolvers.mutation.updateManyBundleProducts,args)
  }
}