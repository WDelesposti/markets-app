
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { MarketsModule } from './modules/markets.module';
import { ValidationPipe } from '@nestjs/common'
import cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(MarketsModule);
  app.use(cors());
  app.useGlobalPipes(new ValidationPipe());

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