import { PaginatedGQLQueryDto } from "../core/dto/pagination";
import { Resolvers } from "../core/types/resolver";

export const ProductsResolvers:Resolvers<['products'],['removeProducts']> = {
  query:{
    products:{
      name:'products',
      query: `query ProductList($limit: Int, $after: Int, $before: Int){
        products(limit: $limit, after: $after, before: $before){
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
            tags
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
    removeProducts:{
      name:'removeProducts',
      query: `mutation ProductDelete($id: [Int!]!){
        removeProducts(id: $id) {
          count
        }
      }`,
    },   
  }
}

export type QueryProductGQLDto = PaginatedGQLQueryDto