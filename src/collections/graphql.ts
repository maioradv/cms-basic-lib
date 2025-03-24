import { BundleCollection } from "../bundles/types";
import { PaginatedGQLQueryDto } from "../core/dto/pagination";
import { Resolvers } from "../core/types/resolver";
import { ProductCollection } from "../products/types";
import { OmitRequire } from "../types";
import { Collection } from "./types";

export const CollectionsResolvers:Resolvers<['collections'],['updateManyCollections','updateCollectionProducts','updateCollectionBundles','removeCollections']> = {
  query:{
    collections:{
      name:'collections',
      query: `query CollectionList($limit: Int, $after: Int, $before: Int, $sorting: String){
        collections(limit: $limit, after: $after, before: $before, sorting: $sorting){
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
            position
            allowChildren
            parentId
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
    updateCollectionBundles:{
      name:'updateCollectionBundles',
      query: `mutation CollectionUpdateBundles($collectionId: Int!, $updateList:[UpdateCollectionBundlesListDto!]!){
        updateCollectionBundles(collectionId:$collectionId,updateList:$updateList){
          collectionId
          bundleId
          position
          createdAt
          updatedAt
        }
      }`,
    },
    updateCollectionProducts:{
      name:'updateCollectionProducts',
      query: `mutation CollectionUpdateProducts($collectionId: Int!, $updateList:[UpdateCollectionProductsListDto!]!){
        updateCollectionProducts(collectionId:$collectionId,updateList:$updateList){
          collectionId
          productId
          position
          createdAt
          updatedAt
        }
      }`,
    },
    updateManyCollections:{
      name:'updateManyCollections',
      query:`mutation CollectionsUpdate($updateList:[UpdateManyCollectionsListDto!]!) {
        updateManyCollections(updateList:$updateList){
          id
          slug
          title
          subtitle
          description
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
          position
          allowChildren
          parentId
          createdAt
          updatedAt
        }
      }`
    },
    removeCollections:{
      name:'removeCollections',
      query: `mutation CollectionDelete($id: [Int!]!){
        removeCollections(id: $id) {
          count
        }
      }`,
    },   
  }
}
export type UpdateCollectionBundlesListDto = OmitRequire<BundleCollection,'collectionId'|'createdAt'|'updatedAt','bundleId'>
export type UpdateCollectionProductsListDto = OmitRequire<ProductCollection,'collectionId'|'createdAt'|'updatedAt','productId'>
export type UpdateManyCollectionsListDto = OmitRequire<Collection,'slug'|'createdAt'|'updatedAt'|'metafields'|'translations','id'>
export type ArgsUpdateProductsDto = {
  collectionId:number,
  /** List has a limit of 50 elements */
  updateList: UpdateCollectionProductsListDto[]
}
export type ArgsUpdateManyDto = {
  updateList: UpdateManyCollectionsListDto[]
}
export type ArgsUpdateBundlesDto = {
  collectionId:number,
  /** List has a limit of 50 elements */
  updateList: UpdateCollectionBundlesListDto[]
}

export type QueryCollectionGQLDto = PaginatedGQLQueryDto