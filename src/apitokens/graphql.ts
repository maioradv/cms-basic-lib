import { PaginatedGQLQueryDto } from "../core/dto/pagination";
import { Resolvers } from "../core/types/resolver";

export const ApiTokensResolvers:Resolvers<['apiTokens'],['removeApiToken']> = {
  query:{
    apiTokens:{
      name:'apiTokens',
      query: `query ApiTokenList($limit: Int, $after: Int, $before: Int){
        apiTokens(limit: $limit, after: $after, before: $before){
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
    removeApiToken:{
      name:'removeApiToken',
      query: `mutation ApiTokenDelete($id: [Int!]!){
        removeApiToken(id: $id) {
          count
        }
      }`,
    },   
  }
}

export type QueryApiTokenGQLDto = PaginatedGQLQueryDto