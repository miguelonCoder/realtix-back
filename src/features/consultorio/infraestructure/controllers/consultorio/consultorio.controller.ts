import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { CreateConsultorioDTO } from 'src/features/consultorio/application/DTO/request/create-consultorio.request.dto';
import { IConsultorioUseCases } from 'src/features/consultorio/application/use-cases/consultorio.use-cases.abstract';
import { ConsultorioModel } from 'src/features/consultorio/domain/models/consultorio.model';
import { UpdateConsultorioRecuestDTO } from '../../../application/DTO/request/update-consultorio.request.dto';
import { DistributionResponseDTO } from 'src/features/consultorio/application/DTO/response/distribution-response.dto';

@Controller('consultorio')
export class ConsultorioController {
  constructor(
    private readonly consultorioService: IConsultorioUseCases
  ){}

  @Post()
  async createScenary( @Body() newConsultorio: CreateConsultorioDTO): Promise<ConsultorioModel> {
    console.log(newConsultorio)
      return await this.consultorioService.create({ ...newConsultorio })
  }

  @Get()
  async getScenaries(): Promise<ConsultorioModel[]> {
    return await this.consultorioService.get()
  }

  @Put()
  async updateConsultorio( @Body() newConsultorio: UpdateConsultorioRecuestDTO): Promise<ConsultorioModel> {
    return await this.consultorioService.update(newConsultorio)
  }

  @Get('/distribucion')
  async getDistribution(): Promise<DistributionResponseDTO[]> {
    return await this.consultorioService.getDistribution()
  }
}
