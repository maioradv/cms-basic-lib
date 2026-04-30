import { BooleanClause, StringClause, WhereClausesDto, Sorting, SortingParamsDto, QueryParamsDto, NumberClause, ObjectClause } from "@maioradv/client-core";
import { Metafield, OmitRequire, Translation, WithRelation, WithRelations } from "@maioradv/types";

export type Setting = {
  id: number;
  namespace: string;
  name: string;
  value: string;
  description: string|null;
  translations: Translation[];
  metafields: Metafield[],
  createdAt: Date;
  updatedAt: Date;
}

export type CreateSettingDto = OmitRequire<Setting,'id'|'createdAt'|'updatedAt','namespace'|'name'|'value'>
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