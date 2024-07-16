import { MaiorCmsApiClient } from "./client";
import { ApiConfigs } from "./config";

export { MaiorCmsApiClient }
export type MaiorCmsApiConfigs = ApiConfigs

export * from './types'
export * from './error'
export * from './auth/types'

export function maiorCmsApiClient(opt:MaiorCmsApiConfigs): MaiorCmsApiClient {
  return new MaiorCmsApiClient(opt)
}