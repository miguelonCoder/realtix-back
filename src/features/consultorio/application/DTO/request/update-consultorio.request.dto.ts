import { PartialType } from "@nestjs/mapped-types";
import { CreateConsultorioDTO } from "./create-consultorio.request.dto";
import { IsInt } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateConsultorioRecuestDTO extends PartialType(CreateConsultorioDTO) {
  @ApiProperty()
  @IsInt()
  ID: number
}