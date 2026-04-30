import { RestApiModuleI, ApiModule, GraphApiModuleI, PaginatedDto, PaginatedGQL, RemoveGQL, queryParams } from "@maioradv/client-core";
import { QueryRoleGQLDto, RolesResolvers } from "./graphql";
import { CreateRoleDto, QueryRoleDto, Role, UpdateRoleDto } from "./types";

export default class Roles extends ApiModule implements RestApiModuleI, GraphApiModuleI {
  create(args:CreateRoleDto): Promise<Role> {
    return this._call('post','/roles',args)
  }

  findAll(args:QueryRoleDto = {}): Promise<PaginatedDto<Role>> {
    return this._call('get','/roles',queryParams(args))
  } 

  findOne(id:number): Promise<Role> {
    return this._call('get',`/roles/${id}`)
  }

  update(id:number,data:UpdateRoleDto): Promise<Role> {
    return this._call('patch',`/roles/${id}`,data)
  }

  remove(id:number): Promise<Role> {
    return this._call('delete',`/roles/${id}`)
  }
  
  list(args:QueryRoleGQLDto = {}): Promise<PaginatedGQL<Role>> {
    return this._graphql(RolesResolvers.query.roles,args)
  }

  removeMany(id:number|number[]): Promise<RemoveGQL> {
    return this._graphql(RolesResolvers.mutation.removeRoles,{
      id
    })
  }

  syncPermissions(): Promise<Role[]> {
    return this._graphql(RolesResolvers.mutation.syncPermissionsRoles)
  }
}