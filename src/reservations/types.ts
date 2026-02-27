import { BooleanClause, DateClause, EnumClause, NumberClause, StringClause, WhereClausesDto } from "../core/dto/clauses";
import { Sorting, SortingParamsDto } from "../core/dto/sorting";
import { QueryParamsDto } from "../core/utils/queryParams";
import { Metafield, OmitRequire, Translation } from "../types";

export enum ReservationSource {
  web = 'web',
  phone = 'phone',
  admin = 'admin',
  partner = 'partner'
}

export enum ReservationStatus {
  pending = 'pending',
  confirmed = 'confirmed',
  cancelled = 'cancelled',
  completed = 'completed',
  noShow = 'noShow',
  arrived = 'arrived',
  partiallyArrived = 'partiallyArrived',
}

export type Reservation = {
  id: number;
  source: ReservationSource|null;
  status: ReservationStatus;
  date: Date;
  guestCount: number;
  name: string;
  lastName: string|null;
  phone: string;
  email: string|null;
  notes: string|null;
  metafields: Metafield[];
  createdAt: Date;
  updatedAt: Date;
}

export type CreateReservationDto = OmitRequire<Reservation,'id'|'createdAt'|'updatedAt','date'|'guestCount'|'name'|'phone'>
export type UpdateReservationDto = Partial<CreateReservationDto>
export type PushReservationDto = OmitRequire<Reservation,'id'|'createdAt'|'updatedAt'|'status','date'|'guestCount'|'name'|'phone'>

export type SortingReservationDto = SortingParamsDto<{
  name?:Sorting,
  date?: Sorting;
  source?: Sorting;
  email?: Sorting;
  guestCount?: Sorting;
  lastName?: Sorting;
  status?: Sorting;
}>

export type ClausesReservationDto = WhereClausesDto<{
  search?:StringClause,
  date?:DateClause,
  minDate?:DateClause,
  maxDate?:DateClause,
  source?:EnumClause<ReservationSource>[],
  status?:EnumClause<ReservationStatus>[],
  guestCount?:NumberClause[],
}>

export type QueryReservationDto = QueryParamsDto<SortingReservationDto,ClausesReservationDto>
