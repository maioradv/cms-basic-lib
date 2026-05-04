import { PaginatedGQLQueryDto, Resolvers } from "@maioradv/client-core";

export const SecretsResolvers:Resolvers<['secrets'],['removeSecrets']> = {
  query:{
    secrets:{
      name:'secrets',
      query: `query SecretList($limit: Int, $after: Int, $before: Int, $sorting: String){
        secrets(limit: $limit, after: $after, before: $before, sorting: $sorting){
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
    removeSecrets:{
      name:'removeSecrets',
      query: `mutation SecretDelete($id: [Int!]!){
        removeSecrets(id: $id) {
          count
        }
      }`,
    },  
  }
}

export type QuerySecretGQLDto = PaginatedGQLQueryDto