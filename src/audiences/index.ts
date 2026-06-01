import { ApiModule, RestApiModuleI, GraphApiModuleI, PaginatedDto, PaginatedGQL, RemoveGQL, queryParams } from "@maioradv/client-core";
import { Audience, CreateAudienceDto, FindOneAudienceDto, QueryAudienceDto, UpdateAudienceDto } from "./types";
import { AudiencesResolvers, QueryAudienceGQLDto } from "./graphql";
import { AudienceEvent, CreateAudienceEventDto } from "./types";

export default class Audiences extends ApiModule implements RestApiModuleI, GraphApiModuleI {
  create(args: CreateAudienceDto): Promise<Audience> {
    return this._call('post', '/audiences', args);
  }
  findAll(args: QueryAudienceDto = {}): Promise<PaginatedDto<Audience>> {
    return this._call('get', '/audiences', queryParams(args));
  }
  findOne(id: number): Promise<FindOneAudienceDto> {
    return this._call('get', `/audiences/${id}`);
  }
  update(id: number, data: UpdateAudienceDto): Promise<Audience> {
    return this._call('patch', `/audiences/${id}`, data);
  }
  remove(id: number): Promise<Audience> {
    return this._call('delete', `/audiences/${id}`);
  }
  list(args: QueryAudienceGQLDto = {}): Promise<PaginatedGQL<Audience>> {
    return this._graphql(AudiencesResolvers.query.audiences, args);
  }
  removeMany(id: number | number[]): Promise<RemoveGQL> {
    return this._graphql(AudiencesResolvers.mutation.removeAudiences, { id });
  }
  createEvent(audienceId: number, args: CreateAudienceEventDto): Promise<AudienceEvent> {
    return this._call('post', `/audiences/${audienceId}/events`, args);
  }
  findAllEvents(audienceId: number): Promise<AudienceEvent[]> {
    return this._call('get', `/audiences/${audienceId}/events`);
  }
}