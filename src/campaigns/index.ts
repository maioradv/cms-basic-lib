import { ApiModule, GraphApiModuleI, PaginatedDto, PaginatedGQL, queryParams, RemoveGQL, RestApiModuleI } from "@maioradv/client-core";
import { CreateCampaignDto, Campaign, UpdateCampaignDto, QueryCampaignDto, FindOneCampaignDto } from "./types";
import { CampaignsResolvers, QueryCampaignGQLDto } from "./graphql";

export default class Campaigns extends ApiModule implements RestApiModuleI, GraphApiModuleI {
  create(args: CreateCampaignDto): Promise<Campaign> {
    return this._call('post', '/campaigns', args);
  }
  findAll(args: QueryCampaignDto = {}): Promise<PaginatedDto<Campaign>> {
    return this._call('get', '/campaigns', queryParams(args));
  }
  findOne(id: number): Promise<FindOneCampaignDto> {
    return this._call('get', `/campaigns/${id}`);
  }
  update(id: number, data: UpdateCampaignDto): Promise<Campaign> {
    return this._call('patch', `/campaigns/${id}`, data);
  }
  remove(id: number): Promise<Campaign> {
    return this._call('delete', `/campaigns/${id}`);
  }
  list(args: QueryCampaignGQLDto = {}): Promise<PaginatedGQL<Campaign>> {
    return this._graphql(CampaignsResolvers.query.campaigns, args);
  }
  removeMany(id: number | number[]): Promise<RemoveGQL> {
    return this._graphql(CampaignsResolvers.mutation.removeCampaigns, { id });
  }
}