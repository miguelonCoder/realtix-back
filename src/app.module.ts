import { Module } from '@nestjs/common';
import { ConsultorioModule } from './features/consultorio/consultorio.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConsultorioEntity } from './features/consultorio/infraestructure/entities/consultorio.entity';

@Module({
  imports: [
    ConsultorioModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '18.116.147.172',
      port: 5434,
      password: 'admin',
      username: 'admin',
      entities: [
        ConsultorioEntity
      ],
      database: 'db_realtix',
      synchronize: true, //TODO: False in production!!!!!
      logging: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
