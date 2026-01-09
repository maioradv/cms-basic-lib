import { MaiorCmsApiClient } from "./client";
import { ApiConfigs } from "./config";

export { MaiorCmsApiClient }
export type MaiorCmsApiConfigs = ApiConfigs

export * from './types'
export * from './error'
export * from './auth/types'
export * from './apitokens/types'
export * from './collections/types'
export * from './configs/types'
export * from './images/types'
export * from './io/types'
export * from './languages/types'
export * from './popups/types'
export * from './productAttributes/types'
export * from './products/types'
export * from './roles/types'
export * from './settings/types'
export * from './bundles/types'
export * from './linkCollections/types'
export * from './gid'

export * from './core/dto/pagination'

export { TiDelizioPlan, TiDelizioConfig } from './configs/services/tidelizio.config'

export function maiorCmsApiClient(opt:MaiorCmsApiConfigs): MaiorCmsApiClient {
  return new MaiorCmsApiClient(opt)
}