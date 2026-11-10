import { Nullable } from "@maioradv/types";

export enum TiDelizioPlan {
  standard = 'standard',
  plus = 'plus',
  premium = 'premium'
}

export type TiDelizioConfig = {
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
  allowReservations?:boolean;
  allowMarketing?:boolean;
  allowSeo?:boolean;
  allowCustomTheme?:boolean;
  plan?:TiDelizioPlan;
  maxMenuCollectionNumber?:number;
  maxProductsCollectionNumber?:number;
  maxProductImageNumber?:number
  maxAdditionalLanguages?:number
}

export type TiDelizioConfigDto = Nullable<TiDelizioConfig>