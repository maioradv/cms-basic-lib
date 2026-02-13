import { PaginatedDto, PaginatedGQL } from "../core/dto/pagination";
import { RemoveGQL } from "../core/model/remove-gql.response";
import { queryParams } from "../core/utils/queryParams";
import { RestApiModuleI, ApiModule, GraphApiModuleI } from "../model";
import { QueryReservationGQLDto, ReservationsResolvers } from "./graphql";
import { CreateReservationDto, QueryReservationDto, Reservation, UpdateReservationDto, PushReservationDto } from "./types";

export default class Reservations extends ApiModule implements RestApiModuleI, GraphApiModuleI {
  create(args:CreateReservationDto): Promise<Reservation> {
    return this._call('post','/reservations',args)
  }

  findAll(args:QueryReservationDto = {}): Promise<PaginatedDto<Reservation>> {
    return this._call('get','/reservations',queryParams(args))
  } 

  findOne(id:number): Promise<Reservation> {
    return this._call('get',`/reservations/${id}`)
  }

  update(id:number,data:UpdateReservationDto): Promise<Reservation> {
    return this._call('patch',`/reservations/${id}`,data)
  }

  remove(id:number): Promise<Reservation> {
    return this._call('delete',`/reservations/${id}`)
  }

  list(args:QueryReservationGQLDto = {}): Promise<PaginatedGQL<Reservation>> {
    return this._graphql(ReservationsResolvers.query.reservations,args)
  }

  removeMany(id:number|number[]): Promise<RemoveGQL> {
    return this._graphql(ReservationsResolvers.mutation.removeReservations,{
      id
    })
  }

  push(args:PushReservationDto): Promise<Reservation> {
    return this._graphql(ReservationsResolvers.mutation.pushReservation,args)
  }
}