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

export * from './core/dto/pagination'

export { TiDelizioPlan } from './configs/services/ti-delizio.config'

export function maiorCmsApiClient(opt:MaiorCmsApiConfigs): MaiorCmsApiClient {
  return new MaiorCmsApiClient(opt)
}