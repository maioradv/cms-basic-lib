import { RestApiModuleI, ApiModule, GraphApiModuleI, PaginatedDto, PaginatedGQL, RemoveGQL, queryParams } from "@maioradv/client-core";
import { QueryPushSubscriptionGQLDto, PushSubscriptionsResolvers } from "./graphql";
import { CreatePushSubscriptionDto, QueryPushSubscriptionDto, PushSubscription, UpdatePushSubscriptionDto, PutPushSubscriptionDto, ManagePushSubscriptionDto } from "./types";

export default class PushSubscriptions extends ApiModule implements RestApiModuleI, GraphApiModuleI {
  create(args:CreatePushSubscriptionDto): Promise<PushSubscription> {
    return this._call('post','/push-subscriptions',args)
  }

  put(args:PutPushSubscriptionDto): Promise<PushSubscription> {
    return this._call('put','/push-subscriptions',args)
  }

  findAll(args:QueryPushSubscriptionDto = {}): Promise<PaginatedDto<PushSubscription>> {
    return this._call('get','/push-subscriptions',queryParams(args))
  } 

  findOne(id:number): Promise<PushSubscription> {
    return this._call('get',`/push-subscriptions/${id}`)
  }

  update(id:number,data:UpdatePushSubscriptionDto): Promise<PushSubscription> {
    return this._call('patch',`/push-subscriptions/${id}`,data)
  }

  remove(id:number): Promise<PushSubscription> {
    return this._call('delete',`/push-subscriptions/${id}`)
  }

  list(args:QueryPushSubscriptionGQLDto = {}): Promise<PaginatedGQL<PushSubscription>> {
    return this._graphql(PushSubscriptionsResolvers.query.pushSubscriptions,args)
  }

  removeMany(id:number|number[]): Promise<RemoveGQL> {
    return this._graphql(PushSubscriptionsResolvers.mutation.removePushSubscriptions,{
      id
    })
  }

  /**
   * @requires Customer - Context Type
   */
  listMine() : Promise<PushSubscriptions[]> {
    return this._graphql(PushSubscriptionsResolvers.query.listPushSubscriptions)
  }

  /**
   * @requires Customer - Context Type
   */
  manage(id:number,update:ManagePushSubscriptionDto): Promise<PushSubscription> {
    return this._graphql(PushSubscriptionsResolvers.mutation.managePushSubscription,{
      id,
      update
    })
  }
}