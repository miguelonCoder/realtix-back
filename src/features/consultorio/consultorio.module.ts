import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsultorioEntity } from './infraestructure/entities/consultorio.entity';
import { ConsultorioController } from './infraestructure/controllers/consultorio/consultorio.controller';
import { ConsultorioService } from './infraestructure/interface-adapters/consultorio/consultorio.service';
import { IConsultorioUseCases } from './application/use-cases/consultorio.use-cases.abstract';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ConsultorioEntity
    ]),
  ],
  controllers: [ConsultorioController],
  providers: [{
    provide: IConsultorioUseCases,
    useClass: ConsultorioService
  }]
})
export class ConsultorioModule {}
