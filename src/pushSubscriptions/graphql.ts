import { PaginatedGQLQueryDto, Resolvers } from "@maioradv/client-core";

export const PushSubscriptionsResolvers:Resolvers<['pushSubscriptions','listPushSubscriptions'],['removePushSubscriptions','managePushSubscription']> = {
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
            name
            customerId
            token
            deviceId
            platform
            locale
            timezone
            active
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
    listPushSubscriptions:{
      name:'listPushSubscriptions',
      query: `query PushSubscriptionList() {
        listPushSubscriptions {
          id
          name
          customerId
          token
          deviceId
          platform
          locale
          timezone
          active
          createdAt
          updatedAt
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
    managePushSubscription:{
      name:'managePushSubscription',
      query: `mutation ManagePushSubscription($id: Int!, $update: ManagePushSubscriptionDto!) {
        managePushSubscription(id: $id, update: $update) {
          id
          name
          customerId
          token
          deviceId
          platform
          locale
          timezone
          active
          createdAt
          updatedAt
        }
      }`,
    },
  }
}

export type QueryPushSubscriptionGQLDto = PaginatedGQLQueryDto