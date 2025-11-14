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

export type CreateApiTokenDto = Omit<ApiToken,'id'|'createdAt'|'updatedAt'|'uuid'|'readOnly'>
export type UpdateApiTokenDto = Partial<CreateApiTokenDto>

export type SortingApiTokenDto = SortingParamsDto<{
  name?:Sorting,
}>

export type ClausesApiTokenDto = WhereClausesDto<{
  name?:StringClause,
  readOnly?:BooleanClause,
}>

export type QueryApiTokenDto = QueryParamsDto<SortingApiTokenDto,ClausesApiTokenDto>