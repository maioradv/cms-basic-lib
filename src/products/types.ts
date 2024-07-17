import { Metafield, OmitRequire, Translation } from "../types";

export type Product = {
  id:number;
  slug: string;
  title: string;
  subtitle: string|null;
  description: string|null;
  tags: string[];
  translations: Translation[];
  metafields: Metafield[];
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type ProductCollection = {
  productId:number;
  collectionId:number;
  position: number|null;
  createdAt: Date;
  updatedAt: Date;
}

export type ProductImage = {
  productId:number;
  imageId:number;
  locale:string|null;
  position:number|null;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateProductCollectionDto = OmitRequire<ProductCollection,'createdAt'|'updatedAt','collectionId'|'productId'>