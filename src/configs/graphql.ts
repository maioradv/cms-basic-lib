import { PaginatedGQLQueryDto, Resolvers } from "@maioradv/client-core";

export const ConfigsResolvers:Resolvers<['configs','Config'],['removeConfigs','initConfig']> = {
  query:{
    configs:{
      name:'configs',
      query: `query ConfigList($limit: Int, $after: Int, $before: Int, $sorting: String){
        configs(limit: $limit, after: $after, before: $before, sorting: $sorting){
          edges {
            node {
              id
            }
            cursor
          }
          nodes {
            id
            name
            value
            customValue
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
    Config:{
      name:'Config',
      query:`query {
        Config {
          allowGoogleAnalytics
          allowMetaPixel
          allowGoogleTagManager
          allowAdvancedMenu
          allowDiscounts
          allowBundles
          allowLocalization
          allowPopup
          allowProductVideo
          allowCustomProductModal
          allowCustomTheme
          allowLinks
          allowReservations
          allowMarketing
          allowSeo
          maxMenuCollectionNumber
          maxProductImageNumber
          maxProductsCollectionNumber
          maxAdditionalLanguages
          plan
        }
      }`
    }
  },
  mutation:{
    removeConfigs:{
      name:'removeConfigs',
      query: `mutation ConfigDelete($id: [Int!]!){
        removeConfigs(id: $id) {
          count
        }
      }`,
    },  
    initConfig:{
      name:'initConfig',
      query: `mutation ConfigInit($plan: TiDelizioPlan!, $config: TiDelizioConfigDto){
        initConfig(plan: $plan, config: $config) {
          id
          name
          value
          customValue
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
      }`,
    },   
  }
}

export type QueryConfigGQLDto = PaginatedGQLQueryDto