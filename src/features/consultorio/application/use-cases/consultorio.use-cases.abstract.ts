import { CreateConsultorioDTO } from "../DTO/request/create-consultorio.request.dto";
import { UpdateConsultorioRecuestDTO } from "../DTO/request/update-consultorio.request.dto";
import { ConsultorioModel } from "../../domain/models/consultorio.model";
import { DistributionResponseDTO } from "../DTO/response/distribution-response.dto";

export abstract class IConsultorioUseCases {
  abstract create( consultorio: CreateConsultorioDTO): Promise<ConsultorioModel> 
  abstract get(): Promise<ConsultorioModel[]> 
  abstract update( consultorio: UpdateConsultorioRecuestDTO): Promise<ConsultorioModel> 

  //analisys
  abstract getDistribution(): Promise<DistributionResponseDTO[]>
}