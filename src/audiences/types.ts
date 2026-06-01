import { BooleanClause, MetadataClause, NumberClause, ObjectClause, QueryParamsDto, StringClause, WhereClausesDto } from "@maioradv/client-core";
import { Sorting } from "@maioradv/client-core";
import { SortingParamsDto } from "@maioradv/client-core";
import { Gid, MetadataFilter, OmitRequire, WithRelations } from "@maioradv/types";
import { AudienceTag } from "../audience-tags/types";

export type Audience = {
  id: number;
  phone: string;
  email: string | null;
  name: string;
  lastName: string | null;
  customerId: number | null;
  uuid: string;
  locale: string;
  metadata: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

type ReservationEvents = {
  name: 'reservations.pending'|'reservations.confirmed'|'reservations.cancelled'|'reservations.noShow'|'reservations.completed',
  payload: {
    id:number,
    date:Date,
    guestCount:number
  }
}

type AudienceEvents = {
  name: 'audiences.dataConflict',
  payload: {
    id:number,
    field:string,
    existing:string,
    incoming:string,
    source:Gid<'tidelizio'>
  }
}

export type AudienceEventData = ReservationEvents | AudienceEvents;

export type CreateAudienceDto = OmitRequire<Audience,'id' | 'uuid' | 'createdAt' | 'updatedAt' | 'deletedAt','name' | 'phone'> & {
  tags?: number[];
};

export type UpdateAudienceDto = Partial<CreateAudienceDto> & {
  removeTags?: number[];
};

export type AudienceEvent = {
  id: number;
  audienceId: number;
  data: AudienceEventData;
  createdAt: Date;
  updatedAt: Date;
};

export type CreateAudienceEventDto = OmitRequire<AudienceEvent, 'id' | 'audienceId' | 'createdAt' | 'updatedAt', 'data'>

export type UpdateAudienceEventDto = Partial<CreateAudienceEventDto>;

export type SortingAudienceDto = SortingParamsDto<{
  name?: Sorting;
  phone?: Sorting;
  email?: Sorting;
  lastName?: Sorting;
}>;

export type ClausesAudienceDto = WhereClausesDto<{
  search?: StringClause;
  name?: StringClause;
  phone?: StringClause;
  email?: StringClause;
  lastName?: StringClause;
  customerId?: NumberClause;
  locale?:StringClause|StringClause[],
  metadata?: ObjectClause<MetadataClause>;
  isDeleted?: BooleanClause;
}>;

export type QueryAudienceDto = QueryParamsDto<SortingAudienceDto, ClausesAudienceDto>;

export type FindOneAudienceDto = WithRelations<Audience, {
  tags: AudienceTag[];
}>;