import { PaginatedGQLQueryDto } from "../core/dto/pagination";
import { Resolvers } from "../core/types/resolver";

export const RolesResolvers:Resolvers<['roles'],['removeRoles']> = {
  query:{
    roles:{
      name:'roles',
      query: `query RoleList($limit: Int, $after: Int, $before: Int){
        roles(limit: $limit, after: $after, before: $before){
          edges {
            node {
              id
            }
            cursor
          }
          nodes {
            id
            name
            description
            permissions
            readonly
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
    removeRoles:{
      name:'removeRoles',
      query: `mutation RoleDelete($id: [Int!]!){
        removeRoles(id: $id) {
          count
        }
      }`,
    },   
  }
}

export type QueryRoleGQLDto = PaginatedGQLQueryDto