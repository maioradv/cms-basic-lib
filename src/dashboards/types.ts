import { BooleanClause, StringClause, WhereClausesDto } from "../core/dto/clauses";
import { Sorting, SortingParamsDto } from "../core/dto/sorting";
import { QueryParamsDto } from "../core/utils/queryParams";
import { WithRequired } from "../types";

export type Dashboard = {
  id: number;
  slug: string;
  name: string;
  domain: string;
  api: string;
  plan: string;
  masterToken: string;
  dashboardTypeId: number;
  createdAt: Date;
  updatedAt: Date;
}

export type DashboardType = {
  id: number;
  slug: string;
  name: string;
  domain: string;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateDashboard = Omit<Dashboard,'id'|'createdAt'|'updatedAt'|'slug'|'api'|'domain'>
export type UpdateDashboard = Partial<CreateDashboard>

export type SortingDashboardDto = SortingParamsDto<{
  plan?:Sorting,
  domain?:Sorting,
  name?:Sorting,
}>

export type ClausesDashboardDto = WhereClausesDto<{
  api?:StringClause,
  name?:StringClause,
  domain?:StringClause,
  plan?:StringClause,
}>

export type QueryDashboardDto = QueryParamsDto<SortingDashboardDto,ClausesDashboardDto>