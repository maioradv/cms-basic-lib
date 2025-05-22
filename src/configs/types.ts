import { Permission } from "../auth/types";
import { BooleanClause, StringClause, WhereClausesDto } from "../core/dto/clauses";
import { Sorting, SortingParamsDto } from "../core/dto/sorting";
import { QueryParamsDto } from "../core/utils/queryParams";
import { OmitRequire, Translation } from "../types";

export type Config = {
  id: number;
  name: string;
  value: string;
  customValue: string|null;
  description: string|null;
  translations: Translation[];
  createdAt: Date;
  updatedAt: Date;
}

export type CreateConfigDto = OmitRequire<Config,'id'|'createdAt'|'updatedAt','name'|'value'>
export type PutConfigDto = CreateConfigDto
export type UpdateConfigDto = Partial<CreateConfigDto>

export type SortingConfigDto = SortingParamsDto<{
  name?:Sorting,
}>

export type ClausesConfigDto = WhereClausesDto<{
  name?:StringClause,
  description?:StringClause,
}>

export type QueryConfigDto = QueryParamsDto<SortingConfigDto,ClausesConfigDto>