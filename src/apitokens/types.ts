import { Permission } from "../auth/types";
import { BooleanClause, StringClause, WhereClausesDto } from "../core/dto/clauses";
import { Sorting, SortingParamsDto } from "../core/dto/sorting";
import { QueryParamsDto } from "../core/utils/queryParams";
import { WithRequired } from "../types";

export type ApiToken = {
  id: number;
  name: string;
  uuid: string;
  permissions: Permission[];
  createdAt: Date;
  updatedAt: Date;
}

export type CreateApiToken = Omit<ApiToken,'id'|'createdAt'|'updatedAt'|'uuid'>
export type UpdateApiToken = Partial<CreateApiToken>

export type SortingApiTokenDto = SortingParamsDto<{
  name?:Sorting,
}>

export type ClausesApiTokenDto = WhereClausesDto<{
  name?:StringClause,
}>

export type QueryApiTokenDto = QueryParamsDto<SortingApiTokenDto,ClausesApiTokenDto>