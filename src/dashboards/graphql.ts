import { PaginatedGQLQueryDto } from "../core/dto/pagination";
import { Resolvers } from "../core/types/resolver";

export const dashboardsResolvers:Resolvers<['dashboards'],['removeDashboard']> = {
  query:{
    dashboards:{
      name:'dashboards',
      query: `query DashboardList($limit: Int, $after: Int, $before: Int){
        dashboards(limit: $limit, after: $after, before: $before){
          edges {
            node {
              id
            }
            cursor
          }
          nodes {
            id
            slug
            domain
            name
            plan
            api
            masterToken
            dashboardTypeId
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
    removeDashboard:{
      name:'removeDashboard',
      query: `mutation DashboardDelete($id: [Int!]!){
        removeDashboard(id: $id) {
          count
        }
      }`,
    },   
  }
}

export type QueryDashboardGQLDto = PaginatedGQLQueryDto