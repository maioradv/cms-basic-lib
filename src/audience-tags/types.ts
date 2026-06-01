import { MetafieldClause, ObjectClause, QueryParamsDto, Sorting, SortingParamsDto, StringClause, WhereClausesDto } from "@maioradv/client-core";
import { Metafield, OmitRequire } from "@maioradv/types";

export type AudienceTag = {
  id: number;
  name: string;
  metafields: Metafield[];
  createdAt: Date;
  updatedAt: Date;
};

export type CreateAudienceTagDto = OmitRequire<AudienceTag, 'id' | 'createdAt' | 'updatedAt','name'>

export type UpdateAudienceTagDto = Partial<CreateAudienceTagDto>;

export type SortingAudienceTagDto = SortingParamsDto<{
  name?: Sorting;
}>;

export type ClausesAudienceTagDto = WhereClausesDto<{
  name?: StringClause;
  metafields?: ObjectClause<MetafieldClause>;
}>;

export type QueryAudienceTagDto = QueryParamsDto<SortingAudienceTagDto, ClausesAudienceTagDto>;