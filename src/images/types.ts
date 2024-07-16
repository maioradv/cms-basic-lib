import { ReadStream } from "fs";
import { BooleanClause, StringClause, WhereClausesDto } from "../core/dto/clauses";
import { Sorting, SortingParamsDto } from "../core/dto/sorting";
import { QueryParamsDto } from "../core/utils/queryParams";

export type Image = {
  id: number;
  checksum: string;
  mimeType: string;
	size: number;
	height: number;
	src: string;
	width: number;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateImage = {
  file:ReadStream
}

export type SortingImageDto = SortingParamsDto<{
  src?:Sorting,
  size?: Sorting,
  width?: Sorting,
  height?: Sorting,
  mimeType?: Sorting,
}>

export type ClausesImageDto = WhereClausesDto<{
  src?:StringClause,
}>

export type QueryImageDto = QueryParamsDto<SortingImageDto,ClausesImageDto>