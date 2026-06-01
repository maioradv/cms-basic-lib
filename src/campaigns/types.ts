import { BooleanClause, DateClause, EnumClause, NumberClause, Sorting, SortingParamsDto, StringClause, WhereClausesDto } from "@maioradv/client-core";
import { QueryParamsDto } from "@maioradv/client-core";
import { OmitRequire, WithRelations } from "@maioradv/types";
import { Segment } from "../segments/types";

export enum CampaignStatus {
  draft = 'draft',
  scheduled = 'scheduled',
  sending = 'sending',
  sent = 'sent',
}

export enum CampaignChannel {
  whatsapp = 'whatsapp',
  email = 'email'
}

export type Campaign = {
  id: number;
  name: string;
  status: CampaignStatus;
  channel: CampaignChannel;
  templateId: number | null;
  segmentId: number | null;
  scheduledAt: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

export type CreateCampaignDto = OmitRequire<Campaign,'id' | 'createdAt' | 'updatedAt' | 'deletedAt','name' | 'channel' | 'scheduledAt'>;

export type UpdateCampaignDto = Partial<CreateCampaignDto>;

export type SortingCampaignDto = SortingParamsDto<{
  name?: Sorting;
}>;

export type ClausesCampaignDto = WhereClausesDto<{
  search?: StringClause;
  name?: StringClause;
  status?: EnumClause<CampaignStatus>;
  channel?: EnumClause<CampaignChannel>;
  templateId?: NumberClause;
  segmentId?: NumberClause;
  minScheduledAt?: DateClause;
  maxScheduledAt?: DateClause;
  isDeleted?: BooleanClause;
}>;

export type QueryCampaignDto = QueryParamsDto<SortingCampaignDto, ClausesCampaignDto>;

export type FindOneCampaignDto = WithRelations<Campaign, {
  segment: Segment | null;
}>;