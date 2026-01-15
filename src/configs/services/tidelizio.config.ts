import { ServiceConfig } from "../model";

export enum TiDelizioPlan {
  standard = 'standard',
  plus = 'plus',
  premium = 'premium'
}

export interface TiDelizioConfig extends ServiceConfig {
  allowGoogleAnalytics?:boolean;
  allowMetaPixel?:boolean;
  allowGoogleTagManager?:boolean;
  allowAdvancedMenu?:boolean;
  allowDiscounts?:boolean;
  allowBundles?:boolean;
  allowCustomProductModal?:boolean;
  allowLocalization?:boolean;
  allowProductVideo?:boolean;
  allowPopup?:boolean;
  allowLinks?:boolean;
  allowCustomTheme?:boolean;
  plan?:TiDelizioPlan;
  maxMenuCollectionNumber?:number;
  maxProductsCollectionNumber?:number;
  maxProductImageNumber?:number
  maxAdditionalLanguages?:number
}