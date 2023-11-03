import { Module } from '@nestjs/common';
import { MarketsService } from '../services/markets.service';
import { MarketsController } from '../controllers/markets.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { ProductController } from '../controllers/product.controller';
import { ProductService } from '../services/product.service';

@Module({
  controllers: [MarketsController, ProductController],
  providers: [MarketsService, ProductService],
  imports: [PrismaModule],
})

export class MarketsModule {}

