import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";
import { ClasePrestadorType } from "../../domain/enums/clase-prestador.type";
import { NombreServicioType } from "../../domain/enums/nombre-servicio.type";
import { TipoPrestadorType } from "../../domain/enums/tipo-prestador.type";
import { ConsultorioModel } from "../../domain/models/consultorio.model";


@Entity('consultorio')
export class ConsultorioEntity implements ConsultorioModel {

  @PrimaryGeneratedColumn('increment')
  ID: number

  @Column({ type: 'int4', nullable: true })
  Identifica?: number

  @Column({ type: 'varchar' })
  Código_de: string

  @Column({ type: 'varchar' })
  Nombre_de_: string

  @Column({
    type: 'enum',
    enum: NombreServicioType,
  })
  Nombre_del: NombreServicioType

  @Column({ type: 'varchar' })
  Teléfono: string

  @Column({ type: 'varchar' })
  Dirección: string

  @Column({ type: 'varchar' })
  Correo_ele: string

  @Column({
    type: 'enum',
    enum: TipoPrestadorType,
  })
  Tipo_de_Pr: TipoPrestadorType

  @Column({
    type: 'enum',
    enum: ClasePrestadorType,
  })
  Clase_de_P: ClasePrestadorType

  @Column({ type: 'int4' })
  codigo_loc: number

  @Column({ type: 'int4' })
  codigo_upz: number

  @Column({ type: 'double precision' })
  coordenada: number

  @Column({ type: 'double precision' })
  coordena_1: number

  @Index({ spatial: true })
  @Column({
    type: 'geography',
    spatialFeatureType: 'Point',
    srid: 4326,
    nullable: false,
  })
  geom: any
}