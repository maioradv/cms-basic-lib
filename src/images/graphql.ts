import { PaginatedGQLQueryDto } from "../core/dto/pagination";
import { Resolvers } from "../core/types/resolver";

export const ImagesResolvers:Resolvers<['images'],[]> = {
  query:{
    images:{
      name:'images',
      query: `query ImageList($limit: Int, $after: Int, $before: Int){
        images(limit: $limit, after: $after, before: $before){
          edges {
            node {
              id
            }
            cursor
          }
          nodes {
            id
            checksum
            mimeType
            size
            height
            width
            src
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
   
  }
}

export type QueryImageGQLDto = PaginatedGQLQueryDto