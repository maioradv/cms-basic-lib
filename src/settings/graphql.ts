import { PaginatedGQLQueryDto } from "../core/dto/pagination";
import { Resolvers } from "../core/types/resolver";

export const SettingsResolvers:Resolvers<['settings'],['removeSettings']> = {
  query:{
    settings:{
      name:'settings',
      query: `query SettingList($limit: Int, $after: Int, $before: Int, $sorting: String){
        settings(limit: $limit, after: $after, before: $before, sorting: $sorting){
          edges {
            node {
              id
            }
            cursor
          }
          nodes {
            id
            namespace
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
    removeSettings:{
      name:'removeSettings',
      query: `mutation SettingDelete($id: [Int!]!){
        removeSettings(id: $id) {
          count
        }
      }`,
    },  
  }
}

export type QuerySettingGQLDto = PaginatedGQLQueryDto