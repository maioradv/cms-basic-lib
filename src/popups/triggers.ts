import { ApiModule } from "../model";
import { PopupTrigger, UpdatePopupTriggerDto } from "./types";

export default class PopupTriggers extends ApiModule {

  update(id:number,data:UpdatePopupTriggerDto): Promise<PopupTrigger> {
    return this._call('patch',`/popup-triggers/${id}`,data)
  }

  remove(id:number): Promise<PopupTrigger> {
    return this._call('delete',`/popup-triggers/${id}`)
  }
}