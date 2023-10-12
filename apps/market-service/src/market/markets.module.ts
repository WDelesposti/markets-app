import { Module } from '@nestjs/common';
import { MarketsService } from './markets.service';
import { MarketsController } from './markets.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [MarketsController],
  providers: [MarketsService],
  imports: [PrismaModule],
})

export class MarketsModule {}

