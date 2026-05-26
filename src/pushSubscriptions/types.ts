import { BooleanClause, StringClause, WhereClausesDto, Sorting, SortingParamsDto, QueryParamsDto, NumberClause, ObjectClause, DateClause, EnumClause } from "@maioradv/client-core";
import { Metafield, OmitRequire, Translation, WithRelation, WithRelations } from "@maioradv/types";

export type PushSubscription = {
  id: number;
  customerId: number;
  token: string;
  deviceId: string;
  platform: string;
  locale: string;
  timezone: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type CreatePushSubscriptionDto = OmitRequire<PushSubscription,'id'|'createdAt'|'updatedAt','customerId'|'token'|'deviceId'|'platform'>
export type PutPushSubscriptionDto = CreatePushSubscriptionDto
export type UpdatePushSubscriptionDto = Partial<CreatePushSubscriptionDto>
export type ManagePushSubscriptionDto = Omit<UpdatePushSubscriptionDto,'customerId'|'deviceId'|'token'>

export type SortingPushSubscriptionDto = SortingParamsDto<{
  customerId?:Sorting,
  platform?: Sorting;
  locale?: Sorting;
  active?: Sorting;
}>

export type ClausesPushSubscriptionDto = WhereClausesDto<{
  customerId?:NumberClause,
  token?:StringClause,
  ddeviceId?:StringClause,
  platform?:StringClause|StringClause[],
  locale?:StringClause|StringClause[],
  timezone?:StringClause,
  active?:BooleanClause,
}>

export type QueryPushSubscriptionDto = QueryParamsDto<SortingPushSubscriptionDto,ClausesPushSubscriptionDto>
