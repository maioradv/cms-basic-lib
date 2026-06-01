import { PaginatedGQLQueryDto, Resolvers } from "@maioradv/client-core";

export const CampaignsResolvers:Resolvers<['campaigns'],['removeCampaigns']> = {
  query:{
    campaigns:{
      name:'campaigns',
      query: `query CampaignList($limit: Int, $after: Int, $before: Int, $sorting: String){
        campaigns(limit: $limit, after: $after, before: $before, sorting: $sorting){
          edges {
            node {
              id
            }
            cursor
          }
          nodes {
            id
            name
            status
            channel
            templateId
            segmentId
            scheduledAt
            createdAt
            updatedAt
            deletedAt
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
    removeCampaigns:{
      name:'removeCampaigns',
      query: `mutation CampaignDelete($id: [Int!]!){
        removeCampaigns(id: $id) {
          count
        }
      }`,
    },
  }
}

export type QueryCampaignGQLDto = PaginatedGQLQueryDto;