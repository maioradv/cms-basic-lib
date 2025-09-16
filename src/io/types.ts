import { ReadStream } from "fs"

export type CreateImportDto = {
  file: ReadStream
}

export enum PdfModel {
  tidelizio = 'tidelizio'
}

export type CreatePdfDto = {
  model:PdfModel,
  locale:string,
  email:string,
  displayName:string
}

export type InitSeedingDto = {
  locale:string,
}