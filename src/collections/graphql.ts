import { PaginatedGQLQueryDto } from "../core/dto/pagination";
import { Resolvers } from "../core/types/resolver";
import { ProductCollection } from "../products/types";
import { OmitRequire } from "../types";
import { Collection } from "./types";

export const CollectionsResolvers:Resolvers<['collections'],['updateManyCollections','updateCollectionProducts','removeCollections']> = {
  query:{
    collections:{
      name:'collections',
      query: `query CollectionList($limit: Int, $after: Int, $before: Int){
        collections(limit: $limit, after: $after, before: $before){
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

export type UpdateCollectionProductsListDto = OmitRequire<ProductCollection,'collectionId'|'createdAt'|'updatedAt','productId'>
export type UpdateManyCollectionsListDto = OmitRequire<Collection,'slug'|'createdAt'|'updatedAt'|'metafields'|'translations','id'>
export type ArgsUpdateProducts = {
  collectionId:number,
  updateList: UpdateCollectionProductsListDto[]
}
export type ArgsUpdateMany = {
  updateList: UpdateManyCollectionsListDto[]
}

export type QueryCollectionGQLDto = PaginatedGQLQueryDto