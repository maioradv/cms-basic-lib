import { PaginatedDto } from "../core/dto/pagination";
import { queryParams } from "../core/utils/queryParams";
import { RestApiModuleI, ApiModule } from "../model";
import { CreateLinkCollectionDto, CreateLinkDto, FindOneLinkCollectionDto, Link, LinkCollection, QueryLinkCollectionDto, UpdateLinkCollectionDto } from "./types";

export default class LinkCollections extends ApiModule implements RestApiModuleI {
  create(args:CreateLinkCollectionDto): Promise<LinkCollection> {
    return this._call('post','/link-collections',args)
  }

  findAll(args:QueryLinkCollectionDto = {}): Promise<PaginatedDto<LinkCollection>> {
    return this._call('get','/link-collections',queryParams(args))
  } 

  findOne(id:number): Promise<FindOneLinkCollectionDto> {
    return this._call('get',`/link-collections/${id}`)
  }

  update(id:number,data:UpdateLinkCollectionDto): Promise<LinkCollection> {
    return this._call('patch',`/link-collections/${id}`,data)
  }

  remove(id:number): Promise<LinkCollection> {
    return this._call('delete',`/link-collections/${id}`)
  }

  createLink(linkCollectionId:number,args:CreateLinkDto): Promise<Link> {
    return this._call('post',`/link-collections/${linkCollectionId}/links`,args)
  }
}