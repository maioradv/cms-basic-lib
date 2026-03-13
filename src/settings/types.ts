import { BooleanClause, ObjectClause, StringClause, WhereClausesDto } from "../core/dto/clauses";
import { Sorting, SortingParamsDto } from "../core/dto/sorting";
import { QueryParamsDto } from "../core/utils/queryParams";
import { Metafield, OmitRequire, Translation } from "../types";

export type Setting = {
  id: number;
  namespace: string|null;
  name: string;
  value: string;
  description: string|null;
  translations: Translation[];
  metafields: Metafield[],
  createdAt: Date;
  updatedAt: Date;
}

export type CreateSettingDto = OmitRequire<Setting,'id'|'createdAt'|'updatedAt','name'|'value'>
export type UpdateSettingDto = Partial<CreateSettingDto>
export type PutSettingDto = CreateSettingDto

export type SortingSettingDto = SortingParamsDto<{
  name?:Sorting,
}>

export type ClausesSettingDto = WhereClausesDto<{
  name?:StringClause,
  description?:StringClause,
  namespace?:StringClause|StringClause[],
  metafields?:ObjectClause<Partial<Metafield>>,
  translations?:ObjectClause<Partial<Translation>>
}>

export type QuerySettingDto = QueryParamsDto<SortingSettingDto,ClausesSettingDto>