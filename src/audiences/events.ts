import { ApiModule } from "@maioradv/client-core";
import { AudienceEvent, UpdateAudienceEventDto } from "./types";

export default class AudienceEvents extends ApiModule {
  findOne(id: number): Promise<AudienceEvent> {
    return this._call('get', `/audience-events/${id}`);
  }
  update(id: number, data: UpdateAudienceEventDto): Promise<AudienceEvent> {
    return this._call('patch', `/audience-events/${id}`, data);
  }
  remove(id: number): Promise<AudienceEvent> {
    return this._call('delete', `/audience-events/${id}`);
  }
}