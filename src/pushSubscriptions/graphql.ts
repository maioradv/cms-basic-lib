import { PaginatedGQLQueryDto, Resolvers } from "@maioradv/client-core";

export const PushSubscriptionsResolvers:Resolvers<['pushSubscriptions'],['removePushSubscriptions']> = {
  query:{
    pushSubscriptions:{
      name:'pushSubscriptions',
      query: `query PushSubscriptionList($limit: Int, $after: Int, $before: Int, $sorting: String){
        pushSubscriptions(limit: $limit, after: $after, before: $before, sorting: $sorting){
          edges {
            node {
              id
            }
            cursor
          }
          nodes {
            id
            customerId
            token
            deviceId
            platform
            locale
            timezone
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
    removePushSubscriptions:{
      name:'removePushSubscriptions',
      query: `mutation PushSubscriptionDelete($id: [Int!]!){
        removePushSubscriptions(id: $id) {
          count
        }
      }`,
    },  
  }
}

export type QueryPushSubscriptionGQLDto = PaginatedGQLQueryDto