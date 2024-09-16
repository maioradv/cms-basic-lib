import { PaginatedGQLQueryDto } from "../core/dto/pagination";
import { Resolvers } from "../core/types/resolver";
import { OmitRequire } from "../types";
import { ProductAttributeValueProduct } from "./types";

export const ProductsResolvers:Resolvers<['products'],['removeProducts','updateManyProductAttributes']> = {
  query:{
    products:{
      name:'products',
      query: `query ProductList($limit: Int, $after: Int, $before: Int){
        products(limit: $limit, after: $after, before: $before){
          edges {
            node {
              id
            }
            cursor
          }
          nodes {
            id
            slug
            title
            subtitle
            description
            tags
            translations {
              key
              locale
              value
            }
            metafields {
              key 
              value
            }
            published
            createdAt
            updatedAt
          }
          meta {
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
          }
        }
      }`,
    },
  },
  mutation:{
    removeProducts:{
      name:'removeProducts',
      query: `mutation ProductDelete($id: [Int!]!){
        removeProducts(id: $id) {
          count
        }
      }`,
    },   
    updateManyProductAttributes:{
      name:'updateManyProductAttributes',
      query:`mutation ProductAttributesUpdate($productId: Int!, $updateList:[UpdateManyProductAttributesListDto!]!) {
        updateManyProductAttributes(id:$productId,updateList:$updateList){
          productAttributeValueId
          productId
          position
          createdAt
          updatedAt
        }
      }`
    }
  }
}

export type UpdateProductAttributesListDto = OmitRequire<ProductAttributeValueProduct,'productId'|'createdAt'|'updatedAt','productAttributeValueId'>
export type ArgsUpdateProductAttributesDto = {
  productId:number,
  updateList: UpdateProductAttributesListDto[]
}

export type QueryProductGQLDto = PaginatedGQLQueryDto