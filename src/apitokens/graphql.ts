import { PaginatedGQLQueryDto } from "../core/dto/pagination";
import { Resolvers } from "../core/types/resolver";

export const ApiTokensResolvers:Resolvers<['apiTokens'],['removeApiTokens','syncPermissionsApiTokens']> = {
  query:{
    apiTokens:{
      name:'apiTokens',
      query: `query ApiTokenList($limit: Int, $after: Int, $before: Int, $sorting: String){
        apiTokens(limit: $limit, after: $after, before: $before, sorting: $sorting){
          edges {
            node {
              id
            }
            cursor
          }
          nodes {
            id
            name
            uuid
            permissions
            readOnly
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
    removeApiTokens:{
      name:'removeApiTokens',
      query: `mutation ApiTokenDelete($id: [Int!]!){
        removeApiTokens(id: $id) {
          count
        }
      }`,
    },   
    syncPermissionsApiTokens:{
      name:'syncPermissionsApiTokens',
      query: `mutation ApiTokenSyncPermissions {
        syncPermissionsApiTokens {
          id
          name
          uuid
          permissions
          readOnly
          createdAt
          updatedAt
        }
      }`,
    },  
  }
}

export type QueryApiTokenGQLDto = PaginatedGQLQueryDto