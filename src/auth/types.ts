import { ApiToken } from "../apitokens/types";
import Maior, { Customer, Operator } from '@maioradv/types'

export type AccessTokenDto = Maior.AccessTokenDto

export enum JwtContextType {
  customer = 'Customer',
  apiToken = 'ApiToken',
  operator = 'Operator'
}

export type JwtPayloadContext = {
  type:JwtContextType;
  id:number;
  name:string;
}

export type JwtPayload = Maior.JwtPayload<JwtPayloadContext>

export type Jwt = {
  payload:JwtPayload;
  Customer?:Customer;
  Operator?:Operator;
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
  write_bundles = 'write_bundles',
  read_linkcollections = 'read_linkcollections',
  write_linkcollections = 'write_linkcollections',
  read_reservations = 'read_reservations',
  write_reservations = 'write_reservations',
  push_reservations = 'push_reservations',
  ead_pushsubscriptions = 'read_pushsubscriptions',
  write_pushsubscriptions = 'write_pushsubscriptions',
  register_pushsubscriptions = 'register_pushsubscriptions',
  read_secrets = 'read_secrets',
  write_secrets = 'write_secrets',
  read_audiences = 'read_audiences',
  write_audiences = 'write_audiences',
  push_audiences = 'push_audiences',
  read_audienceevents = 'read_audienceevents',
  write_audienceevents = 'write_audienceevents',
  read_audiencetags = 'read_audiencetags',
  write_audiencetags = 'write_audiencetags',
  read_segments = 'read_segments',
  write_segments = 'write_segments',
  read_campaigns = 'read_campaigns',
  write_campaigns = 'write_campaigns',
  deploy_configs = 'deploy_configs',
  deploy_roles = 'deploy_roles',
  deploy_apitokens = 'deploy_apitokens',
}