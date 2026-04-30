import { BooleanClause, StringClause, WhereClausesDto, Sorting, SortingParamsDto, QueryParamsDto, NumberClause, ObjectClause } from "@maioradv/client-core";
import { Metafield, OmitRequire, Translation, WithRelation, WithRelations } from "@maioradv/types";

export type Config = {
  id: number;
  name: string;
  value: string;
  customValue: string|null;
  description: string|null;
  translations: Translation[];
  metafields: Metafield[],
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
  metafields?:ObjectClause<Partial<Metafield>>,
  translations?:ObjectClause<Partial<Translation>>
}>

export type QueryConfigDto = QueryParamsDto<SortingConfigDto,ClausesConfigDto>