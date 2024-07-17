import { PaginatedGQLQueryDto } from "../core/dto/pagination";
import { Resolvers } from "../core/types/resolver";

export const ConfigsResolvers:Resolvers<['configs'],['removeConfigs']> = {
  query:{
    configs:{
      name:'configs',
      query: `query ConfigList($limit: Int, $after: Int, $before: Int){
        configs(limit: $limit, after: $after, before: $before){
          edges {
            node {
              id
            }
            cursor
          }
          nodes {
            id
            name
            value
            description
            translations {
              key
              locale
              value
            }
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
    removeConfigs:{
      name:'removeConfigs',
      query: `mutation ConfigDelete($id: [Int!]!){
        removeConfigs(id: $id) {
          count
        }
      }`,
    },   
  }
}

export type QueryConfigGQLDto = PaginatedGQLQueryDto