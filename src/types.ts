export enum ApiVersion {
  July24 = '2024-07',
  Unstable = 'unstable'
}

export const LATEST_API_VERSION = ApiVersion.July24
export const SUPPORTED_API_VERSIONS = [
  LATEST_API_VERSION,
  ApiVersion.Unstable
]

export enum ApiHeader {
  Authorization = 'Authorization',
  ApiVersion = 'X-Api-Version',
  ApiCacheControl = 'X-Api-Cache-Control'
}

export type Metafield = {
  key:string,
  value:string
}
export type Translation = {
  key:string,
  value:string,
  locale:string
}

export type WithRelation<T, R extends string, RType> = T & {[key in R]:RType}
export type WithRelations<T, R extends object> = T & R
export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] }
export type OmitRequire<T, O extends keyof T = null, R extends keyof T = null> = Partial<Omit<T,O>> & { [P in R]-?: T[P] }