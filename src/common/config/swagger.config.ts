import { DocumentBuilder, OpenAPIObject, SwaggerModule } from "@nestjs/swagger";

export const config = new DocumentBuilder()
  .setTitle('API DOC')
  .setDescription('API DOC description')
  .setVersion('1.0.0')
  .addTag('API')
  .addBearerAuth()
  .build();
