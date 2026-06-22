import axios, { AxiosInstance } from "axios";
import { ValidatedApiConfigs, ApiConfigs, validateConfigs } from "./config";
import { ApiHeader } from "./api";
import Auth from "./auth";
import { AccessTokenDto } from "./auth/types";
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
import Bundles from "./bundles";
import BundleVariants from "./bundles/variants";
import LinkCollections from "./linkCollections";
import Links from "./linkCollections/links";
import Cache from "./cache";
import Reservations from "./reservations";
import { AuthError, ClientApiI } from "@maioradv/client-core";
import Secrets from "./secrets";
import PushSubscriptions from "./pushSubscriptions";
import Audiences from "./audiences";
import AudienceEvents from "./audiences/events";
import AudienceTags from "./audience-tags";
import Segments from "./segments";
import Campaigns from "./campaigns";
import { SseHandler } from "./sse";

export class MaiorCmsApiClient implements ClientApiI
{
  protected client:AxiosInstance;
  protected configApi:ValidatedApiConfigs;
  protected accessToken:string;
  sse:SseHandler;
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
  bundles:Bundles;
  bundleVariants:BundleVariants;
  linkCollections:LinkCollections;
  links:Links;
  cache:Cache;
  reservations:Reservations;
  secrets:Secrets;
  pushSubscriptions:PushSubscriptions;
  audiences:Audiences;
  audienceEvents:AudienceEvents;
  audienceTags:AudienceTags;
  segments:Segments;
  campaigns:Campaigns;

  constructor(protected config: ApiConfigs) {
    this.configApi = validateConfigs(this.config)
    this.client = this._initClient()
    this._initModules()
  }

  protected _initClient(): AxiosInstance {
    const client = axios.create()
    client.defaults.baseURL = this.configApi.sandbox ? `http://${this.configApi.host}` : `https://${this.configApi.host}`;
    client.defaults.headers.common[ApiHeader.ApiVersion] = this.configApi.version
    client.defaults.headers.common[ApiHeader.ApiCacheControl] = this.configApi.disableCache ? 'no-cache' : 'caching'
    client.defaults.headers.common['Content-Type'] = 'application/json'
    return this.configApi.axios ? this.configApi.axios(client) : client
  }

  protected _initModules() {
    this.authentication = new Auth(this.client)
    this.sse = new SseHandler(this.client)
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
    this.bundles = new Bundles(this.client)
    this.bundleVariants = new BundleVariants(this.client)
    this.linkCollections = new LinkCollections(this.client)
    this.links = new Links(this.client)
    this.cache = new Cache(this.client)
    this.reservations = new Reservations(this.client)
    this.secrets = new Secrets(this.client)
    this.pushSubscriptions = new PushSubscriptions(this.client)
    this.audiences = new Audiences(this.client)
    this.audienceEvents = new AudienceEvents(this.client)
    this.audienceTags = new AudienceTags(this.client)
    this.segments = new Segments(this.client)
    this.campaigns = new Campaigns(this.client)
  }

  _setAccessToken(accessToken:string) {
    this.client.defaults.headers.common[ApiHeader.Authorization] = `Bearer ${accessToken}`
    this.accessToken = accessToken
    this._initSse()
  }

  _getAccessToken() {
    return this.accessToken
  }

  _initSse() {
    this.sse.connect()
  }

  async auth(): Promise<AccessTokenDto> {
    if(!this.configApi.credentials) throw new AuthError('Missing credentials')
    const access = this.configApi.credentials.apiToken ? await this.authentication.token(this.configApi.credentials.apiToken) : await this.authentication.jwt(this.configApi.credentials.accessToken)
    this._setAccessToken(access.access_token)
    return access
  }

  async jwt(accessToken:string): Promise<AccessTokenDto> {
    const access = await this.authentication.jwt(accessToken)
    this._setAccessToken(access.access_token)
    return access
  }
}