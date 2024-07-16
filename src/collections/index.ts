import { PaginatedDto, PaginatedGQL } from "../core/dto/pagination";
import { RemoveGQL } from "../core/model/remove-gql.response";
import { queryParams } from "../core/utils/queryParams";
import { RestApiModuleI, ApiModule, GraphApiModuleI } from "../model";
import { ProductCollection } from "../products/types";
import { ArgsUpdateMany, ArgsUpdateProducts, CollectionsResolvers, QueryCollectionGQLDto } from "./graphql";
import { Collection, CreateCollection, QueryCollectionDto, UpdateCollection } from "./types";

export default class Collections extends ApiModule implements RestApiModuleI, GraphApiModuleI {
  create(args:CreateCollection): Promise<Collection> {
    return this._call<Collection>('post','/collections',args)
  }

  findAll(args:QueryCollectionDto = {}): Promise<PaginatedDto<Collection>> {
    return this._call<PaginatedDto<Collection>>('get','/collections',queryParams(args))
  } 

  findOne(id:number): Promise<Collection> {
    return this._call<Collection>('get',`/collections/${id}`)
  }

  update(id:number,data:UpdateCollection): Promise<Collection> {
    return this._call<Collection>('patch',`/collections/${id}`,data)
  }

  remove(id:number): Promise<Collection> {
    return this._call<Collection>('delete',`/collections/${id}`)
  }
  
  list(args:QueryCollectionGQLDto = {}): Promise<PaginatedGQL<Collection>> {
    return this._graphql<PaginatedGQL<Collection>>(CollectionsResolvers.query.collections,args)
  }

  updateMany(args:ArgsUpdateMany): Promise<Collection[]> {
    return this._graphql<Collection[]>(CollectionsResolvers.mutation.updateManyCollections,args)
  }

  updateProducts(args:ArgsUpdateProducts): Promise<ProductCollection[]> {
    return this._graphql<ProductCollection[]>(CollectionsResolvers.mutation.updateCollectionProducts,args)
  }

  removeMany(id:number|number[]): Promise<RemoveGQL> {
    return this._graphql<RemoveGQL>(CollectionsResolvers.mutation.removeCollections,{
      id
    })
  }
}