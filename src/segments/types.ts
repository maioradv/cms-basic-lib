import { QueryParamsDto, Sorting, SortingParamsDto, StringClause, WhereClausesDto } from "@maioradv/client-core";
import { OmitRequire } from "@maioradv/types";

export type Segment = {
  id: number;
  name: string;
  description: string | null;
  filters: SegmentFilters;
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

export type FilterComparisonOperators<T = unknown> = {
  gte?: T
  lte?: T
  gt?: T
  lt?: T
  eq?: T
}
export type FilterSearchOperators<T = unknown> = {
  equals?: T
  contains?: T
  startsWith?: T
  endsWith?: T
  not?:{
    equals?: T
    contains?: T
    startsWith?: T
    endsWith?: T
  }
}
export type FilterListOperators<T = unknown> = {
  includes?: T[]
  excludes?: T[]
}
export type FilterGroupOperators<T = unknown> = {
  hasAny?: T[]
  hasAll?: T[]
  hasNone?: T[]
}
export type FilterComposer<T = unknown> = {
  AND?: T[]
  OR?: T[]
  NOT?: T[]
}

export type AudienceEventFiltersType = {
  lastCampaignSentDays?: FilterComparisonOperators<number>,
  lastReservationDays?: FilterComparisonOperators<number>,
  totalReservations?: FilterComparisonOperators<number>,
  noShowReservationCount?: FilterComparisonOperators<number>,
  cancelledReservationCount?: FilterComparisonOperators<number>,
}

export type AudienceFiltersType = {
  id?:FilterListOperators<number>,
  name?:FilterSearchOperators<string>,
  lastName?:FilterSearchOperators<string>,
  tags?:FilterGroupOperators<string>,
  events?:AudienceEventFiltersType
}

export type SegmentFilters = {
  audience?:FilterComposer<AudienceFiltersType>
}