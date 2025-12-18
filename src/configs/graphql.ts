import { PaginatedGQLQueryDto } from "../core/dto/pagination";
import { Resolvers } from "../core/types/resolver";

export const ConfigsResolvers:Resolvers<['configs','TiDelizioConfig'],['removeConfigs','initTiDelizioConfig']> = {
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
    TiDelizioConfig:{
      name:'TiDelizioConfig',
      query:`query {
        TiDelizioConfig {
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
          maxMenuCollectionNumber
          maxProductImageNumber
          maxProductsCollectionNumber
          maxAdditionalLanguages
          plan
          qrLinkRedirect
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
    initTiDelizioConfig:{
      name:'initTiDelizioConfig',
      query: `mutation ConfigInitTiDelizio($plan: TiDelizioPlan!, $config: TiDelizioConfigDto){
        initTiDelizioConfig(plan: $plan, config: $config) {
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
          createdAt
          updatedAt
        }
      }`,
    },   
  }
}

export type QueryConfigGQLDto = PaginatedGQLQueryDto