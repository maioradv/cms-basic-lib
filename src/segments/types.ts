import { QueryParamsDto, Sorting, SortingParamsDto, StringClause, WhereClausesDto } from "@maioradv/client-core";
import { OmitRequire } from "@maioradv/types";

export type Segment = {
  id: number;
  name: string;
  description: string | null;
  filters: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateSegmentDto = OmitRequire<Segment, 'id' | 'createdAt' | 'updatedAt','name' | 'filters'>

export type UpdateSegmentDto = Partial<CreateSegmentDto>;

export type SortingSegmentDto = SortingParamsDto<{
  name?: Sorting;
}>;

export type ClausesSegmentDto = WhereClausesDto<{
  search?: StringClause;
  name?: StringClause;
  description?: StringClause;
}>;

export type QuerySegmentDto = QueryParamsDto<SortingSegmentDto, ClausesSegmentDto>;