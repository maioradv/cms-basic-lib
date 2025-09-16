import { ApiModule } from "../model";
import { CreateImportDto, CreatePdfDto, InitSeedingDto } from "./types";

export default class IO extends ApiModule {
  importExcel(args:CreateImportDto): Promise<void> {
    return this._call('post','/excel',args,{
      headers:{
        'Content-Type':'multipart/form-data'
      }
    })
  }

  RNImportExcel(formData:any): Promise<void> {
    return this._call('post',`/excel`,formData,{
      headers:{
        'Content-Type':'multipart/form-data'
      }
    })
  }

  exportExcel() {
    return this._call<Buffer>('get','/excel',undefined,{
      responseType:'arraybuffer'
    })
  }

  excelModel() {
    return this._call<Buffer>('get','/excel/model',undefined,{
      responseType:'arraybuffer'
    })
  }

  createPdf(args:CreatePdfDto): Promise<boolean> {
    return this._call('post','/pdf',args)
  }

  downloadPdf() {
    return this._call<Buffer>('get','/pdf',undefined,{
      responseType:'arraybuffer'
    })
  }

  seeding(args:InitSeedingDto): Promise<void> {
    return this._call('post','/seeding',args)
  }
}