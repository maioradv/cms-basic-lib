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
  allowCustomProductModal?:boolean;
  allowLocalization?:boolean;
  allowProductVideo?:boolean;
  allowPopup?:boolean;
  allowCustomTheme?:boolean;
  plan?:TiDelizioPlan;
  qrLinkRedirect?:string;
  maxMenuCollectionNumber?:number;
  maxProductsCollectionNumber?:number;
  maxProductImageNumber?:number
  maxAdditionalLanguages?:number
}