import { ApiModule } from "../model";
import { CreateImportDto } from "./types";

export default class IO extends ApiModule {
  importExcel(args:CreateImportDto): Promise<void> {
    return this._call('post','/excel',args,{
      headers:{
        'Content-Type':'multipart/form-data'
      }
    })
  }
}