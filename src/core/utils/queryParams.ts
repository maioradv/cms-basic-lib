import { ClausesDto, where } from "../dto/clauses"
import { PaginatedQueryDto, pagination } from "../dto/pagination"
import { SortingDto, sorting } from "../dto/sorting"

export type QueryParamsDto<T extends SortingDto,H extends ClausesDto> = {
  pagination?:PaginatedQueryDto,
  sorting?:T,
  where?:H
}

export function queryParams<T extends SortingDto,H extends ClausesDto>(args:QueryParamsDto<T,H>): Record<string,any> {
  return {
    ...pagination(args.pagination ?? {}),
    ...sorting(args.sorting ?? {}),
    ...where(args.where ?? {})
  }
}