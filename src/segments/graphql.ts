import { PaginatedGQLQueryDto, Resolvers } from "@maioradv/client-core";

export const SegmentsResolvers:Resolvers<['segments'],['removeSegments']> = {
  query:{
    segments:{
      name:'segments',
      query: `query SegmentList($limit: Int, $after: Int, $before: Int, $sorting: String){
        segments(limit: $limit, after: $after, before: $before, sorting: $sorting){
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
            filters
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
    removeSegments:{
      name:'removeSegments',
      query: `mutation SegmentDelete($id: [Int!]!){
        removeSegments(id: $id) {
          count }
        }
      }`,
    },
  }
}

export type QuerySegmentGQLDto = PaginatedGQLQueryDto;