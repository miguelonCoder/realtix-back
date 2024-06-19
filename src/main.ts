import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Prueba técnica Ing Miguel Ramírez / Realtix SAS')
    .setDescription('Geoportal de Consultorios de Pediatría de Bogota')
    .setVersion('1.0')
    .addTag('consultorios')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors({
    origin: ['https://vercel.com', 'http://localhost:3000'], // Agrega todos los dominios permitidos
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    allowedHeaders: 'Content-Type, Accept, Authorization'
  });
  
  await app.listen(3000);
}
bootstrap();
