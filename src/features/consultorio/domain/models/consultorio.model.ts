import { ClasePrestadorType } from "../enums/clase-prestador.type";
import { NombreServicioType } from "../enums/nombre-servicio.type";
import { TipoPrestadorType } from "../enums/tipo-prestador.type";

export interface ConsultorioModel {
  ID: number,
  Identifica?: number,
  Código_de: string,
  Nombre_de_: string,
  Nombre_del: NombreServicioType,
  Teléfono: string,
  Dirección: string,
  Correo_ele: string,
  Tipo_de_Pr: TipoPrestadorType,
  Clase_de_P: ClasePrestadorType,
  codigo_loc: number,
  codigo_upz: number,
  coordenada: number,
  coordena_1: number,
  geom: any
}