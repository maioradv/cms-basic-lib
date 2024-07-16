import { Permission } from "../auth/types";
import { BooleanClause, StringClause, WhereClausesDto } from "../core/dto/clauses";
import { Sorting, SortingParamsDto } from "../core/dto/sorting";
import { QueryParamsDto } from "../core/utils/queryParams";

export type ApiToken = {
  id: number;
  name: string;
  uuid: string;
  permissions: Permission[];
  readOnly: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateApiToken = Omit<ApiToken,'id'|'createdAt'|'updatedAt'|'uuid'|'readOnly'>
export type UpdateApiToken = Partial<CreateApiToken>

export type SortingApiTokenDto = SortingParamsDto<{
  name?:Sorting,
}>

export type ClausesApiTokenDto = WhereClausesDto<{
  name?:StringClause,
}>

export type QueryApiTokenDto = QueryParamsDto<SortingApiTokenDto,ClausesApiTokenDto>