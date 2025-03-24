import { ApiToken } from "../apitokens/types";
import { Customer } from "../customers/types";

export type AccessTokenDto = {
  access_token:string;
  token_type:string;
  expires_in:number;
  refresh_token?:string;
}

export enum JwtContextType {
  customer = 'Customer',
  apiToken = 'ApiToken'
}

export type JwtPayloadContext = {
  type:JwtContextType;
  id:number;
  name:string;
}

export type JwtPayload = {
  sub: string;
  aud: string[];
  scope: string[];
  iat: number;
  exp: number;
  iss: string;
  context: JwtPayloadContext;
}

export type Jwt = {
  payload:JwtPayload;
  Customer?:Customer;
  ApiToken?:ApiToken;
}

export enum Permission {
  read_products = 'read_products',
  write_products = 'write_products',
  read_collections = 'read_collections',
  write_collections = 'write_collections',
  read_productattributes = 'read_productattributes',
  write_productattributes = 'write_productattributes',
  read_productattributevalues = 'read_productattributevalues',
  write_productattributevalues = 'write_productattributevalues',
  read_bulkoperations = 'read_bulkoperations',
  write_bulkoperations = 'write_bulkoperations',
  run_bulkoperations = 'run_bulkoperations',
  read_discounts = 'read_discounts',
  write_discounts = 'write_discounts',
  read_languages = 'read_languages',
  write_languages = 'write_languages',
  read_images = 'read_images',
  write_images = 'write_images',
  read_apitokens = 'read_apitokens',
  write_apitokens = 'write_apitokens',
  read_roles = 'read_roles',
  write_roles = 'write_roles',
  read_popups = 'read_popups',
  write_popups = 'write_popups',
  read_configs = 'read_configs',
  write_configs = 'write_configs',
  write_io_operations = 'write_io_operations',
  read_io_operations = 'read_io_operations',
  read_settings = 'read_settings',
  write_settings = 'write_settings',
  read_bundles = 'read_bundles',
  write_bundles = 'write_bundles'
}