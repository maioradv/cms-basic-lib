import { PaginatedDto } from "../core/dto/pagination";
import { queryParams } from "../core/utils/queryParams";
import { RestApiModuleI, ApiModule } from "../model";
import { DashboardAccess, CreateDashboardAccess, UpdateDashboardAccess, QueryDashboardAccessDto } from "./types";

export default class DashboardAccesses extends ApiModule implements RestApiModuleI {
  create(data:CreateDashboardAccess): Promise<DashboardAccess> {
    return this._call<DashboardAccess>('post','/dashboard-accesses',data)
  }

  findAll(args:QueryDashboardAccessDto = {}): Promise<PaginatedDto<DashboardAccess>> {
    return this._call<PaginatedDto<DashboardAccess>>('get','/dashboard-accesses',queryParams(args))
  } 

  findOne(id:number): Promise<DashboardAccess> {
    return this._call<DashboardAccess>('get',`/dashboard-accesses/${id}`)
  }

  update(id:number,data:UpdateDashboardAccess): Promise<DashboardAccess> {
    return this._call<DashboardAccess>('patch',`/dashboard-accesses/${id}`,data)
  }

  remove(id:number): Promise<DashboardAccess> {
    return this._call<DashboardAccess>('delete',`/dashboard-accesses/${id}`)
  }
}