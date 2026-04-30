import { PaginatedGQLQueryDto, Resolvers } from "@maioradv/client-core";

export const LanguagesResolvers:Resolvers<['languages'],['removeLanguages']> = {
  query:{
    languages:{
      name:'languages',
      query: `query LanguageList($limit: Int, $after: Int, $before: Int, $sorting: String){
        languages(limit: $limit, after: $after, before: $before, sorting: $sorting){
          edges {
            node {
              id
            }
            cursor
          }
          nodes {
            id
            name
            active
            iso
            locale
            published
            default
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
    removeLanguages:{
      name:'removeLanguages',
      query: `mutation LanguageDelete($id: [Int!]!){
        removeLanguages(id: $id) {
          count
        }
      }`,
    },   
  }
}

export type QueryLanguageGQLDto = PaginatedGQLQueryDto