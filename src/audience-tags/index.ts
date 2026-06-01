import { ApiModule, PaginatedDto, queryParams } from "@maioradv/client-core";
import { AudienceTag, CreateAudienceTagDto, QueryAudienceTagDto, UpdateAudienceTagDto } from "./types";

export default class AudienceTags extends ApiModule{
  create(args: CreateAudienceTagDto): Promise<AudienceTag> {
    return this._call('post', '/audience-tags', args);
  }
  findAll(args: QueryAudienceTagDto = {}): Promise<PaginatedDto<AudienceTag>> {
    return this._call('get', '/audience-tags', queryParams(args));
  }
  findOne(id: number): Promise<AudienceTag> {
    return this._call('get', `/audience-tags/${id}`);
  }
  update(id: number, data: UpdateAudienceTagDto): Promise<AudienceTag> {
    return this._call('patch', `/audience-tags/${id}`, data);
  }
  remove(id: number): Promise<AudienceTag> {
    return this._call('delete', `/audience-tags/${id}`);
  }
}