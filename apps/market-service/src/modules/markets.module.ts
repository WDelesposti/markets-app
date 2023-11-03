import { Module } from '@nestjs/common';
import { MarketsService } from '../services/markets.service';
import { MarketsController } from '../controllers/markets.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { ProductController } from '../controllers/product.controller';
import { ProductService } from '../services/product.service';
import { PriceService } from '../services/price.service';
import { PriceController } from '../controllers/price.controller';

@Module({
  controllers: [MarketsController, ProductController, PriceController],
  providers: [MarketsService, ProductService, PriceService],
  imports: [PrismaModule],
})

export class MarketsModule {}

