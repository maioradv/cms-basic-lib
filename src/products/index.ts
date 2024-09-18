import { Collection } from "../collections/types";
import { PaginatedDto, PaginatedGQL } from "../core/dto/pagination";
import { RemoveGQL } from "../core/model/remove-gql.response";
import { queryParams } from "../core/utils/queryParams";
import { Image } from "../images/types";
import { RestApiModuleI, ApiModule, GraphApiModuleI } from "../model";
import { CreateCollectionOnProductDto, CreateProductAttributeValueProductDto, CreateProductDto, CreateProductImageDto, CreateProductVariantDto, FindAllProductDto, FindOneProductDto, Product, ProductAttributeValueProduct, ProductCollection, ProductImage, ProductVariant, QueryProductDto, UpdateProductDto, UpdateProductImageDto } from "../products/types";
import { WithRelation } from "../types";
import { ArgsUpdateProductAttributesDto, FindAllProductGQLDto, ProductsResolvers, QueryProductGQLDto } from "./graphql";

export default class Products extends ApiModule implements RestApiModuleI, GraphApiModuleI {
  create(args:CreateProductDto): Promise<Product> {
    return this._call('post','/products',args)
  }

  findAll(args:QueryProductDto = {}): Promise<PaginatedDto<FindAllProductDto>> {
    return this._call('get','/products',queryParams(args))
  } 

  findOne(id:number): Promise<FindOneProductDto> {
    return this._call('get',`/products/${id}`)
  }

  update(id:number,data:UpdateProductDto): Promise<Product> {
    return this._call('patch',`/products/${id}`,data)
  }

  remove(id:number): Promise<Product> {
    return this._call('delete',`/products/${id}`)
  }
  
  list(args:QueryProductGQLDto = {}): Promise<PaginatedGQL<FindAllProductGQLDto>> {
    return this._graphql(ProductsResolvers.query.products,args)
  }

  removeMany(id:number|number[]): Promise<RemoveGQL> {
    return this._graphql(ProductsResolvers.mutation.removeProducts,{
      id
    })
  }

  createImage(productId:number,args:CreateProductImageDto): Promise<ProductImage> {
    return this._call('post',`/products/${productId}/images`,args,{
      headers:{
        'Content-Type':'multipart/form-data'
      }
    })
  }

  RNCreateImage(productId:number,formData:any): Promise<ProductImage> {
    return this._call('post',`/products/${productId}/images`,formData,{
      headers:{
        'Content-Type':'multipart/form-data'
      }
    })
  }

  findAllImages(productId:number): Promise<WithRelation<ProductImage,'Image',Image>[]> {
    return this._call('get',`/products/${productId}/images`)
  } 

  updateImage(productId:number,imageId:number,data:UpdateProductImageDto): Promise<ProductImage> {
    return this._call('patch',`/products/${productId}/images/${imageId}`,data)
  }

  removeImage(productId:number,imageId:number): Promise<ProductImage> {
    return this._call('delete',`/products/${productId}/images/${imageId}`)
  }

  findAllCollections(productId:number): Promise<WithRelation<ProductCollection,'Collection',Collection>[]> {
    return this._call('get',`/products/${productId}/collections`)
  } 

  linkCollection(productId:number,args:CreateCollectionOnProductDto): Promise<ProductCollection> {
    return this._call('post',`/products/${productId}/collections`,args)
  }

  unlinkCollection(productId:number,collectionId:number): Promise<ProductCollection> {
    return this._call('delete',`/products/${productId}/collections/${collectionId}`)
  }

  createVariant(productId:number,args:CreateProductVariantDto): Promise<ProductVariant> {
    return this._call('post',`/products/${productId}/variants`,args)
  }

  findAllVariants(productId:number): Promise<ProductVariant[]> {
    return this._call('get',`/products/${productId}/variants`)
  } 

  linkAttributeValue(productId:number,args:CreateProductAttributeValueProductDto): Promise<ProductAttributeValueProduct> {
    return this._call('post',`/products/${productId}/attribute-values`,args)
  }

  unlinkAttributeValue(productId:number,attributeValueId:number): Promise<ProductAttributeValueProduct> {
    return this._call('delete',`/products/${productId}/attribute-values/${attributeValueId}`)
  }

  updateProductAttributes(args:ArgsUpdateProductAttributesDto): Promise<ProductAttributeValueProduct[]> {
    return this._graphql(ProductsResolvers.mutation.updateManyProductAttributes,args)
  }
}