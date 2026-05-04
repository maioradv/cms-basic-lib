import { BooleanClause, StringClause, WhereClausesDto, Sorting, SortingParamsDto, QueryParamsDto, NumberClause, ObjectClause } from "@maioradv/client-core";
import { Metafield, OmitRequire, Translation, WithRelation, WithRelations } from "@maioradv/types";

export type Secret = {
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

export type CreateSecretDto = OmitRequire<Secret,'id'|'createdAt'|'updatedAt','namespace'|'name'|'value'>
export type UpdateSecretDto = Partial<CreateSecretDto>
export type PutSecretDto = CreateSecretDto

export type SortingSecretDto = SortingParamsDto<{
  name?:Sorting,
}>

export type ClausesSecretDto = WhereClausesDto<{
  name?:StringClause,
  description?:StringClause,
  namespace?:StringClause|StringClause[],
  metafields?:ObjectClause<Partial<Metafield>>,
  translations?:ObjectClause<Partial<Translation>>
}>

export type QuerySecretDto = QueryParamsDto<SortingSecretDto,ClausesSecretDto>