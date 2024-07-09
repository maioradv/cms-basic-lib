import { BooleanClause, NumberClause, StringClause, WhereClausesDto } from "../core/dto/clauses";
import { Sorting, SortingParamsDto } from "../core/dto/sorting";
import { QueryParamsDto } from "../core/utils/queryParams";
import { WithRequired } from "../types";

export type DashboardAccess = {
  id: number;
  customerId: number;
  dashboardId: number;
  roleId: number;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateDashboardAccess = Omit<DashboardAccess,'id'|'createdAt'|'updatedAt'>
export type UpdateDashboardAccess = Partial<CreateDashboardAccess>

export type SortingDashboardAccessDto = SortingParamsDto<{
  customerId?:Sorting,
  dashboardId?:Sorting,
  roleId?:Sorting,
}>

export type ClausesDashboardAccessDto = WhereClausesDto<{
  customerId?:NumberClause,
  dashboardId?:NumberClause,
  roleId?:NumberClause,
}>

export type QueryDashboardAccessDto = QueryParamsDto<SortingDashboardAccessDto,ClausesDashboardAccessDto>