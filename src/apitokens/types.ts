import { Permission } from "../auth/types";
import { BooleanClause, StringClause, WhereClausesDto, Sorting, SortingParamsDto, QueryParamsDto } from "@maioradv/client-core";

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