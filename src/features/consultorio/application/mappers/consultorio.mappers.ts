import { ConsultorioModel } from "../../domain/models/consultorio.model";
import { CreateConsultorioDTO } from "../DTO/request/create-consultorio.request.dto";
import { Point } from 'geojson'

export const createConsultorioDTOToConsultorioEntity = ( dto: CreateConsultorioDTO): Omit<ConsultorioModel, 'ID'> => {
  return {
    ...dto,
    geom: {
      type: 'Point',
      coordinates: [
        dto.coordenada,
        dto.coordena_1
      ],
    } as Point,
  }
}