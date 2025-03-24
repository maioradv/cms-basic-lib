import { PaginatedGQLQueryDto } from "../core/dto/pagination";
import { Resolvers } from "../core/types/resolver";

export const RolesResolvers:Resolvers<['roles'],['removeRoles','syncPermissionsRoles']> = {
  query:{
    roles:{
      name:'roles',
      query: `query RoleList($limit: Int, $after: Int, $before: Int, $sorting: String){
        roles(limit: $limit, after: $after, before: $before, sorting: $sorting){
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
    syncPermissionsRoles:{
      name:'syncPermissionsRoles',
      query: `mutation RoleSyncPermissions {
        syncPermissionsRoles {
          id
          name
          description
          permissions
          readOnly
          translations {
            key
            locale
            value
          }
          createdAt
          updatedAt
        }
      }`,
    },  
  }
}

export type QueryRoleGQLDto = PaginatedGQLQueryDto