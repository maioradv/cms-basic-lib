import { PaginatedGQLQueryDto } from "../core/dto/pagination";
import { Resolvers } from "../core/types/resolver";
import { OmitRequire, WithRelations } from "../types";
import { Bundle, BundleProduct, BundleVariant } from "./types";

export const BundlesResolvers:Resolvers<['bundles'],['removeBundles','updateManyBundleProducts']> = {
  query:{
    bundles:{
      name:'bundles',
      query: `query BundleList($limit: Int, $after: Int, $before: Int, $collectionId: Int, $sorting: String){
        bundles(limit: $limit, after: $after, before: $before, collectionId: $collectionId, sorting: $sorting){
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
            BundleVariant {
              id
              description
              translations {
                key
                locale
                value
              }
              price
              fullPrice
              bundleId
              published
              createdAt
              updatedAt
            }
            BundleProduct {
              bundleId
              productId
              position
              createdAt
              updatedAt
            }
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
    removeBundles:{
      name:'removeBundles',
      query: `mutation BundleDelete($id: [Int!]!){
        removeBundles(id: $id) {
          count
        }
      }`,
    },   
    updateManyBundleProducts:{
      name:'updateManyBundleProducts',
      query:`mutation BundleProductsUpdate($bundleId: Int!, $updateList:[UpdateManyBundleProductsListDto!]!) {
        updateManyBundleProducts(bundleId:$bundleId,updateList:$updateList){
          bundleId
          productId
          position
          createdAt
          updatedAt
        }
      }`
    }
  }
}

export type UpdateBundleProductsListDto = OmitRequire<BundleProduct,'bundleId'|'createdAt'|'updatedAt','productId'>
export type ArgsUpdateBundleProductsDto = {
  bundleId:number,
  updateList: UpdateBundleProductsListDto[]
}

export type QueryBundleGQLDto = PaginatedGQLQueryDto & {
  collectionId?:number
}

export type FindAllBundleGQLDto = WithRelations<Bundle,{
  BundleVariant:BundleVariant[],
  BundleProduct:BundleProduct[]
}>