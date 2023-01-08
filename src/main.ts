import { config } from './common/config/swagger.config';
import { HttpExcceptionFilter } from './common/exceptions/http.exception.filter';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import * as path from 'path';

async function init() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalFilters(new HttpExcceptionFilter());
  app.enableCors({
    origin: '*',
    credentials: true,
  });
  app.use('/api', '/api-json');
  app.useStaticAssets(path.join(__dirname, './common/uploads'), {
    prefix: '/photo',
  });

  const document: OpenAPIObject = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT);
}
init();
