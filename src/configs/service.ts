export enum TiDelizioPlan {
  standard = 'standard',
  plus = 'plus',
  premium = 'premium'
}

export interface TiDelizioConfig {
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
  allowCustomTheme?:boolean;
  plan?:TiDelizioPlan;
  maxMenuCollectionNumber?:number;
  maxProductsCollectionNumber?:number;
  maxProductImageNumber?:number
  maxAdditionalLanguages?:number
}