import { ServiceConfig } from "../model";

export enum TiDelizioPlan {
  standard = 'standard',
  plus = 'plus',
  premium = 'premium'
}

export interface TiDelizioConfig extends ServiceConfig {
  allowAdvancedMenu?:boolean;
  allowDiscounts?:boolean;
  allowLocalization?:boolean;
  allowProductVideo?:boolean;
  allowPopup?:boolean;
  allowCustomTheme?:boolean;
  plan?:TiDelizioPlan;
  qrLinkRedirect?:string;
  maxMenuCollectionNumber?:number;
  maxProductsCollectionNumber?:number;
  maxProductImageNumber?:number
}