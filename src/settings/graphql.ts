import { PaginatedGQLQueryDto, Resolvers } from "@maioradv/client-core";

export const SettingsResolvers:Resolvers<['settings'],['removeSettings','initNotifications']> = {
  query:{
    settings:{
      name:'settings',
      query: `query SettingList($limit: Int, $after: Int, $before: Int, $sorting: String){
        settings(limit: $limit, after: $after, before: $before, sorting: $sorting){
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
    removeSettings:{
      name:'removeSettings',
      query: `mutation SettingDelete($id: [Int!]!){
        removeSettings(id: $id) {
          count
        }
      }`,
    },  
    initNotifications:{
      name:'initNotifications',
      query: `mutation NotificationsApiInit($dashboardId: Int!, $accessToken: String!){
        initNotifications(
          dashboardId: $dashboardId,
          accessToken: $accessToken
        ) {
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
      }`
    },
  }
}

export type QuerySettingGQLDto = PaginatedGQLQueryDto

export type InitNotificationsDto = {
  dashboardId:number;
  accessToken:string;
}