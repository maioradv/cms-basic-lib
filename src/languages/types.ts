import { BooleanClause, StringClause, WhereClausesDto } from "../core/dto/clauses";
import { Sorting, SortingParamsDto } from "../core/dto/sorting";
import { QueryParamsDto } from "../core/utils/queryParams";
import { OmitRequire, Translation } from "../types";

export type Language = {
  id: number;
  name: string;
  active: boolean;
  iso: string;
  locale: string;
  published: boolean;
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
}>

export type QueryLanguageDto = QueryParamsDto<SortingLanguageDto,ClausesLanguageDto>