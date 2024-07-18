import { PaginatedGQLQueryDto } from "../core/dto/pagination";
import { Resolvers } from "../core/types/resolver";

export const PopupsResolvers:Resolvers<['popups'],['removePopups']> = {
  query:{
    popups:{
      name:'popups',
      query: `query PopupList($limit: Int, $after: Int, $before: Int){
        popups(limit: $limit, after: $after, before: $before){
          edges {
            node {
              id
            }
            cursor
          }
          nodes {
            id
            name
            modal
            target
            published
            translations {
              key
              locale
              value
            }
            metafields {
              key 
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
    removePopups:{
      name:'removePopups',
      query: `mutation PopupDelete($id: [Int!]!){
        removePopups(id: $id) {
          count
        }
      }`,
    },   
  }
}

export type QueryPopupGQLDto = PaginatedGQLQueryDto