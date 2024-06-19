import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateConsultorioDTO } from 'src/features/consultorio/application/DTO/request/create-consultorio.request.dto';
import { UpdateConsultorioRecuestDTO } from 'src/features/consultorio/application/DTO/request/update-consultorio.request.dto';
import { ConsultorioModel } from 'src/features/consultorio/domain/models/consultorio.model';
import { ConsultorioEntity } from '../../entities/consultorio.entity';
import { DataSource, Repository } from 'typeorm';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { IConsultorioUseCases } from 'src/features/consultorio/application/use-cases/consultorio.use-cases.abstract';
import { createConsultorioDTOToConsultorioEntity } from 'src/features/consultorio/application/mappers/consultorio.mappers';
import { DistributionResponseDTO } from 'src/features/consultorio/application/DTO/response/distribution-response.dto';

@Injectable()
export class ConsultorioService implements IConsultorioUseCases {

  constructor(
    @InjectDataSource() private dataSource: DataSource,
    @InjectRepository(ConsultorioEntity)
    private repository: Repository<ConsultorioEntity>,
  ) { }

  async create(consultorio: CreateConsultorioDTO): Promise<ConsultorioModel> {
    const ExistingConsultorio = await this.repository.findOne({
      where: {
        Nombre_de_: consultorio.Nombre_de_,
      },
    })

    if (ExistingConsultorio) {
      throw new BadRequestException(
        'Ya existe un consultorio con el mismo nombre',
      )
    }

    try {
      const newConsultorio = this.repository.create(createConsultorioDTOToConsultorioEntity(consultorio))
      return this.repository.save(newConsultorio)
    } catch (e) {
      throw new Error(e)
    }
  }

  get(): Promise<ConsultorioModel[]> {
    return this.repository.find()
  }

  async update(consultorio: UpdateConsultorioRecuestDTO): Promise<ConsultorioModel> {
    const iconsultorio = await this.repository.findOne({
      where: {
        ID: consultorio.ID
      }
    })

    console.log(iconsultorio)

    if (!iconsultorio) {
      throw new NotFoundException(
        'No se ha encontrado el consultorio en el sistema',
      )
    }

    const updateStatus = await this.repository.update({
      ID: consultorio.ID
    }, {
      ...consultorio
    })

    return this.repository.findOne({
      where: {
        ID: consultorio.ID
      }
    })
  }

  getDistribution(): Promise<DistributionResponseDTO[]> {
    try {
      return this.dataSource
        .query<DistributionResponseDTO[]>(`
          WITH voronoi AS (
    SELECT 
        (ST_Dump(ST_VoronoiPolygons(ST_Collect(geom::geometry)))).geom AS voronoi_geom
    FROM 
        consultorio
),
limite AS (
    SELECT 
        geom AS limite_geom
    FROM 
        limite
),
recortados AS (
    SELECT 
        ST_Intersection(v.voronoi_geom, l.limite_geom) AS geom
    FROM 
        voronoi v, limite l
),
poligonos AS (
    SELECT 
        (ST_Dump(ST_CollectionExtract(geom, 3))).geom AS geom  -- Extraer y convertir a Polygons
    FROM 
        recortados
)
SELECT 
    st_asgeojson(geom) as geom,
    ROUND((ST_Area(st_transform(geom, 3857) )::NUMERIC / 1000000), 3) AS area
FROM 
    recortados
WHERE 
    geom IS NOT NULL;
    
   
   
        `)
    } catch (error) {

    }
  }

}
