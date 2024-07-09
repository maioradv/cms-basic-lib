import { Axios } from "axios"
import { GraphApiError, RestApiError } from "./error"
import { ResolverDef } from "./core/types/resolver"
import { AccessTokenDto } from "./auth/types"

export class ApiModule {
  constructor(private client:Axios){}

  protected async _call<Res,Req = Record<string,any>>(method:CallMethod,path:string,data?:Req): Promise<Res> {
    try {
      const response = await this.client.request({
        method:method,
        url:path,
        data: method !== 'get' ? data ?? undefined : undefined,
        params: method === 'get' ? data ?? undefined : undefined
      })
      return response.data as Res
    }
    catch(error:any) {
      throw new RestApiError(error)
    }
  }

  protected async _graphql<Res,Req = Record<string,any>>(resolver:ResolverDef<string>,variables?:Req): Promise<Res> {
    try {
      const response = await this.client.request({
        method:'post',
        url:'/graphql',
        data: {
          query:resolver.query,
          variables
        },
      })
      if(response.data.errors) throw new Error((response.data.errors as Array<any>).map(e => e.message).join(', '))
      return response.data.data[resolver.name] as Res
    }
    catch(error:any) {
      throw new GraphApiError(error)
    }
  }
}

export interface ClientApiI {
  auth: () => Promise<AccessTokenDto>,
}

export interface RestApiModuleI {
  create:(args:unknown) => Promise<unknown>,
  findAll:(args?:unknown) => Promise<unknown>,
  findOne:(id:number,args?:unknown) => Promise<unknown>,
  update:(id:number,args:unknown) => Promise<unknown>,
  remove:(id:number) => Promise<unknown>,
}

export interface GraphApiModuleI {
  list:(args:unknown) => Promise<unknown>,
  removeMany:(id:number|number[]) => Promise<unknown>,
}

type CallMethod = 'get' | 'post' | 'patch' | 'delete'