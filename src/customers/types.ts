import { BooleanClause, StringClause, WhereClausesDto } from "../core/dto/clauses";
import { Sorting, SortingParamsDto } from "../core/dto/sorting";
import { QueryParamsDto } from "../core/utils/queryParams";
import { WithRequired } from "../types";

export type Customer = {
  id: number;
  email: string;
  password: string;
  name: string|null;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

type PartialCustomer = Partial<Omit<Customer,'id'|'createdAt'|'updatedAt'>>

export type CreateCustomer = PartialCustomer & WithRequired<PartialCustomer,'email'|'password'>
export type UpdateCustomer = PartialCustomer

export type SortingCustomerDto = SortingParamsDto<{
  active?:Sorting,
  email?:Sorting,
  name?:Sorting,
}>

export type ClausesCustomerDto = WhereClausesDto<{
  email?:StringClause,
  active?:BooleanClause,
}>

export type QueryCustomerDto = QueryParamsDto<SortingCustomerDto,ClausesCustomerDto>