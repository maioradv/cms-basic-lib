import { ApiModule, GraphApiModuleI, PaginatedDto, PaginatedGQL, queryParams, BulkResponse, RestApiModuleI } from "@maioradv/client-core";
import { CreateSegmentDto, QuerySegmentDto, Segment, UpdateSegmentDto } from "./types";
import { QuerySegmentGQLDto, SegmentsResolvers } from "./graphql";
import { Audience } from "../audiences/types";

export default class Segments extends ApiModule implements RestApiModuleI, GraphApiModuleI {
  create(args: CreateSegmentDto): Promise<Segment> {
    return this._call('post', '/segments', args);
  }
  findAll(args: QuerySegmentDto = {}): Promise<PaginatedDto<Segment>> {
    return this._call('get', '/segments', queryParams(args));
  }
  findOne(id: number): Promise<Segment> {
    return this._call('get', `/segments/${id}`);
  }
  update(id: number, data: UpdateSegmentDto): Promise<Segment> {
    return this._call('patch', `/segments/${id}`, data);
  }
  remove(id: number): Promise<Segment> {
    return this._call('delete', `/segments/${id}`);
  }
  list(args: QuerySegmentGQLDto = {}): Promise<PaginatedGQL<Segment>> {
    return this._graphql(SegmentsResolvers.query.segments, args);
  }
  removeMany(id: number | number[]): Promise<BulkResponse> {
    return this._graphql(SegmentsResolvers.mutation.removeSegments, { id });
  }
  audience(id:number): Promise<Audience[]> {
    return this._call('get', `/segments/${id}/audiences`);
  }
}