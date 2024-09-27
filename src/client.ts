import axios, { Axios } from "axios";
import { ValidatedApiConfigs, ApiConfigs, validateConfigs } from "./config";
import { ApiHeader } from "./types";
import { ClientApiI } from "./model";
import Auth from "./auth";
import { AccessTokenDto } from "./auth/types";
import { AuthError } from "./error";
import ApiTokens from "./apitokens";
import Collections from "./collections";
import Images from "./images";
import Configs from "./configs";
import IO from "./io";
import Languages from "./languages";
import Roles from "./roles";
import Popups from "./popups";
import PopupTriggers from "./popups/triggers";
import ProductAttributes from "./productAttributes";
import ProductAttributeValues from "./productAttributes/values";
import Products from "./products";
import ProductVariants from "./products/variants";
import Settings from "./settings";

export class MaiorCmsApiClient implements ClientApiI
{
  protected client:Axios;
  protected configApi:ValidatedApiConfigs;
  authentication:Auth;
  apiTokens:ApiTokens;
  collections:Collections;
  configs:Configs;
  images:Images;
  io:IO;
  languages:Languages;
  popups:Popups;
  popupTriggers:PopupTriggers;
  productAttributes:ProductAttributes;
  productAttributeValues:ProductAttributeValues;
  products:Products;
  productVariants:ProductVariants;
  roles:Roles;
  settings:Settings;

  constructor(protected config: ApiConfigs) {
    this.configApi = validateConfigs(this.config)
    this.client = this._initClient()
    this._initModules()
  }

  protected _initClient(): Axios {
    axios.defaults.baseURL = this.configApi.sandbox ? `http://${this.configApi.host}` : `https://${this.configApi.host}`;
    axios.defaults.headers.common[ApiHeader.ApiVersion] = this.configApi.version
    axios.defaults.headers.common[ApiHeader.ApiCacheControl] = this.configApi.disableCache ? 'no-cache' : 'caching'
    axios.defaults.headers.common['Content-Type'] = 'application/json'
    return this.configApi.axios ? this.configApi.axios(axios) : axios
  }

  protected _initModules() {
    this.authentication = new Auth(this.client)
    this.apiTokens = new ApiTokens(this.client)
    this.collections = new Collections(this.client)
    this.configs = new Configs(this.client)
    this.images = new Images(this.client)
    this.io = new IO(this.client);
    this.languages = new Languages(this.client)
    this.popups = new Popups(this.client)
    this.popupTriggers = new PopupTriggers(this.client)
    this.productAttributes = new ProductAttributes(this.client)
    this.productAttributeValues = new ProductAttributeValues(this.client)
    this.products = new Products(this.client)
    this.productVariants = new ProductVariants(this.client)
    this.roles = new Roles(this.client)
    this.settings = new Settings(this.client)
  }

  _setAccessToken(accessToken:string) {
    this.client.defaults.headers.common[ApiHeader.Authorization] = `Bearer ${accessToken}`
  }

  async auth(): Promise<AccessTokenDto> {
    if(!this.configApi.credentials) throw new AuthError('Missing credentials')
    const access = this.configApi.credentials.apiToken ? await this.authentication.token(this.configApi.credentials.apiToken) : await this.authentication.jwt(this.configApi.credentials.accessToken)
    this.client.defaults.headers.common[ApiHeader.Authorization] = `${access.token_type} ${access.access_token}`
    return access
  }

  async jwt(accessToken:string): Promise<AccessTokenDto> {
    const access = await this.authentication.jwt(accessToken)
    this.client.defaults.headers.common[ApiHeader.Authorization] = `${access.token_type} ${access.access_token}`
    return access
  }
}