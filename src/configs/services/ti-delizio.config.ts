import { ServiceConfig } from "../model";

export enum TiDelizioPlan {
  basic = 'basic',
  standard = 'standard',
  pro = 'pro'
}

export interface TiDelizioConfig extends ServiceConfig {
  allowAdvancedMenu?:boolean;
  allowDiscounts?:boolean;
  allowLocalization?:boolean;
  allowProductVideo?:boolean;
  allowPopup?:boolean;
  plan?:TiDelizioPlan;
  qrLinkRedirect?:string;
  maxMenuCollectionNumber?:number;
  maxProductsCollectionNumber?:number;
  maxProductImageNumber?:number
}