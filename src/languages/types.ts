import { BooleanClause, StringClause, WhereClausesDto, Sorting, SortingParamsDto, QueryParamsDto, NumberClause, ObjectClause } from "@maioradv/client-core";
import { Metafield, OmitRequire, Translation, WithRelation, WithRelations } from "@maioradv/types";

export type Language = {
  id: number;
  name: string;
  active: boolean;
  iso: string;
  locale: string;
  published: boolean;
  default: boolean;
  translations: Translation[];
  createdAt: Date;
  updatedAt: Date;
}

export type CreateLanguageDto = OmitRequire<Language,'id'|'createdAt'|'updatedAt','name'|'iso'|'locale'>
export type UpdateLanguageDto = Partial<CreateLanguageDto>

export type SortingLanguageDto = SortingParamsDto<{
  name?:Sorting,
  active?:Sorting,
  published?:Sorting,
}>

export type ClausesLanguageDto = WhereClausesDto<{
  name?:StringClause,
  locale?:StringClause,
  active?:BooleanClause,
  published?:BooleanClause,
  default?:BooleanClause,
}>

export type QueryLanguageDto = QueryParamsDto<SortingLanguageDto,ClausesLanguageDto>