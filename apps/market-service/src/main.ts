
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { MarketsModule } from './market/modules/markets.module';

async function bootstrap() {
  const app = await NestFactory.create(MarketsModule);

  const config = new DocumentBuilder()
    .setTitle('market-service')
    .setDescription('The market-service API description')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();