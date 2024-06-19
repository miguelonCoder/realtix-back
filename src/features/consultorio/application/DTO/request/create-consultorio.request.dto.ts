import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsInt, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator'
import { ConsultorioModel } from '../../../domain/models/consultorio.model';
import { ClasePrestadorType } from 'src/features/consultorio/domain/enums/clase-prestador.type';
import { NombreServicioType } from 'src/features/consultorio/domain/enums/nombre-servicio.type';
import { TipoPrestadorType } from 'src/features/consultorio/domain/enums/tipo-prestador.type';

export class CreateConsultorioDTO implements Omit<ConsultorioModel, 'ID' | 'geom'> {
  @ApiProperty()
  @IsUUID()
  @IsOptional()
  id?: string

  @ApiProperty()
  @IsInt()
  Identifica: number

  @ApiProperty()
  @IsString()
  Código_de: string

  @ApiProperty()
  @IsString()
  Nombre_de_: string

  @ApiProperty()
  @IsEnum({
    enum: NombreServicioType
  })
  Nombre_del: NombreServicioType

  @ApiProperty()
  @IsString()
  Teléfono: string

  @ApiProperty()
  @IsString()
  Dirección: string

  @ApiProperty()
  @IsString()
  Correo_ele: string

  @ApiProperty()
  @IsEnum({
    enum: TipoPrestadorType
  })
  Tipo_de_Pr: TipoPrestadorType

  @ApiProperty()
  @IsEnum({
    enum: ClasePrestadorType
  })
  Clase_de_P: ClasePrestadorType

  @ApiProperty()
  @IsInt()
  codigo_loc: number

  @ApiProperty()
  @IsInt()
  codigo_upz: number

  @ApiProperty()
  @IsNumber()
  coordenada: number

  @ApiProperty()
  @IsNumber()
  coordena_1: number

}