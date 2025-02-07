import { PaginatedGQLQueryDto } from "../core/dto/pagination";
import { Resolvers } from "../core/types/resolver";

export const ProductAttributesResolvers:Resolvers<['productAttributes'],['removeProductAttributes']> = {
  query:{
    productAttributes:{
      name:'productAttributes',
      query: `query ProductAttributeList($limit: Int, $after: Int, $before: Int, $sorting: String){
        productAttributes(limit: $limit, after: $after, before: $before, sorting: $sorting){
          edges {
            node {
              id
            }
            cursor
          }
          nodes {
            id
            name
            slug
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
    removeProductAttributes:{
      name:'removeProductAttributes',
      query: `mutation ProductAttributeDelete($id: [Int!]!){
        removeProductAttributes(id: $id) {
          count
        }
      }`,
    },   
  }
}

export type QueryProductAttributeGQLDto = PaginatedGQLQueryDto

export const ProductAttributeValuesResolvers:Resolvers<['productAttributeValues'],['removeProductAttributeValues']> = {
  query:{
    productAttributeValues:{
      name:'productAttributeValues',
      query: `query ProductAttributeValueList($limit: Int, $after: Int, $before: Int, $attributeSlug: String, $published: Boolean $sorting: String){
        productAttributeValues(limit: $limit, after: $after, before: $before, attributeSlug: $attributeSlug, published: $published, sorting: $sorting){
          edges {
            node {
              id
            }
            cursor
          }
          nodes {
            id
            name
            productAttributeId
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
    removeProductAttributeValues:{
      name:'removeProductAttributeValues',
      query: `mutation ProductAttributeValueDelete($id: [Int!]!){
        removeProductAttributeValues(id: $id) {
          count
        }
      }`,
    },   
  }
}

export type QueryProductAttributeValueGQLDto = PaginatedGQLQueryDto & {
  attributeSlug?:string,
  published?:boolean
}