import { PaginatedDto, PaginatedGQL } from "../core/dto/pagination";
import { RemoveGQL } from "../core/model/remove-gql.response";
import { queryParams } from "../core/utils/queryParams";
import { Image } from "../images/types";
import { RestApiModuleI, ApiModule, GraphApiModuleI } from "../model";
import { ProductCollection } from "../products/types";
import { WithRelation } from "../types";
import { ArgsUpdateManyDto, ArgsUpdateProductsDto, CollectionsResolvers, QueryCollectionGQLDto } from "./graphql";
import { Collection, CollectionImage, CreateCollectionDto, CreateCollectionImageDto, CreateProductOnCollectionDto, FindAllCollectionDto, FindAllCollectionProductsDto, FindOneCollectionDto, QueryCollectionDto, QueryCollectionProductsDto, UpdateCollectionDto, UpdateCollectionImageDto } from "./types";

export default class Collections extends ApiModule implements RestApiModuleI, GraphApiModuleI {
  create(args:CreateCollectionDto): Promise<Collection> {
    return this._call('post','/collections',args)
  }

  findAll(args:QueryCollectionDto = {}): Promise<PaginatedDto<FindAllCollectionDto>> {
    return this._call('get','/collections',queryParams(args))
  } 

  count(id:number) {
    return this._call<number>('get',`/collections/${id}/count`)
  } 

  findOne(id:number): Promise<FindOneCollectionDto> {
    return this._call('get',`/collections/${id}`)
  }

  findSlug(slug:string): Promise<FindOneCollectionDto> {
    return this._call('get',`/collections/slug/${slug}`)
  }

  update(id:number,data:UpdateCollectionDto): Promise<Collection> {
    return this._call('patch',`/collections/${id}`,data)
  }

  remove(id:number): Promise<Collection> {
    return this._call('delete',`/collections/${id}`)
  }
  
  list(args:QueryCollectionGQLDto = {}): Promise<PaginatedGQL<Collection>> {
    return this._graphql(CollectionsResolvers.query.collections,args)
  }

  updateMany(args:ArgsUpdateManyDto): Promise<Collection[]> {
    return this._graphql(CollectionsResolvers.mutation.updateManyCollections,args)
  }

  updateProducts(args:ArgsUpdateProductsDto): Promise<ProductCollection[]> {
    return this._graphql(CollectionsResolvers.mutation.updateCollectionProducts,args)
  }

  removeMany(id:number|number[]): Promise<RemoveGQL> {
    return this._graphql(CollectionsResolvers.mutation.removeCollections,{
      id
    })
  }

  createImage(collectionId:number,args:CreateCollectionImageDto): Promise<CollectionImage> {
    return this._call('post',`/collections/${collectionId}/images`,args,{
      headers:{
        'Content-Type':'multipart/form-data'
      }
    })
  }

  RNCreateImage(collectionId:number,formData:any): Promise<CollectionImage> {
    return this._call('post',`/collections/${collectionId}/images`,formData,{
      headers:{
        'Content-Type':'multipart/form-data'
      }
    })
  }

  findAllImages(collectionId:number): Promise<WithRelation<CollectionImage,'Image',Image>[]> {
    return this._call('get',`/collections/${collectionId}/images`)
  } 

  updateImage(collectionId:number,imageId:number,data:UpdateCollectionImageDto): Promise<CollectionImage> {
    return this._call('patch',`/collections/${collectionId}/images/${imageId}`,data)
  }

  removeImage(collectionId:number,imageId:number): Promise<CollectionImage> {
    return this._call('delete',`/collections/${collectionId}/images/${imageId}`)
  }

  createProduct(collectionId:number,args:CreateProductOnCollectionDto): Promise<ProductCollection> {
    return this._call('post',`/collections/${collectionId}/products`,args)
  }

  findAllProducts(collectionId:number,args:QueryCollectionProductsDto = {}): Promise<PaginatedDto<FindAllCollectionProductsDto>> {
    return this._call('get',`/collections/${collectionId}/products`,queryParams(args))
  } 

  removeProduct(collectionId:number,productId:number): Promise<ProductCollection> {
    return this._call('delete',`/collections/${collectionId}/products/${productId}`)
  }
}