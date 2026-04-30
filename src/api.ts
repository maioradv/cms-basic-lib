export enum ApiVersion {
  July24 = '2024-07',
  October25 = '2025-10',
  Unstable = 'unstable'
}

export const LATEST_API_VERSION = ApiVersion.October25
export const SUPPORTED_API_VERSIONS = [
  LATEST_API_VERSION,
  ApiVersion.Unstable
]

export enum ApiHeader {
  Authorization = 'Authorization',
  ApiVersion = 'X-Api-Version',
  ApiCacheControl = 'X-Api-Cache-Control'
}