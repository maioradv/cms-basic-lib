import { Permission } from "../auth/types";
import { BooleanClause, StringClause, WhereClausesDto, Sorting, SortingParamsDto, QueryParamsDto, NumberClause, ObjectClause } from "@maioradv/client-core";
import { Metafield, OmitRequire, Translation, WithRelation, WithRelations } from "@maioradv/types";

export type Role = {
  id: number;
  name: string;
  description: string|null;
  permissions: Permission[];
  readOnly: boolean;
  translations: Translation[];
  createdAt: Date;
  updatedAt: Date;
}

export type CreateRoleDto = OmitRequire<Role,'id'|'createdAt'|'updatedAt'|'readOnly','name'|'permissions'>
export type UpdateRoleDto = Partial<CreateRoleDto>

export type SortingRoleDto = SortingParamsDto<{
  name?:Sorting,
}>

export type ClausesRoleDto = WhereClausesDto<{
  name?:StringClause,
  description?:StringClause,
  readOnly?:BooleanClause,
}>

export type QueryRoleDto = QueryParamsDto<SortingRoleDto,ClausesRoleDto>