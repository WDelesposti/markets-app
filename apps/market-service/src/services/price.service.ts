import { Injectable } from '@nestjs/common';
import { CreatePriceDto } from '../dto/create-price.dto';
import { UpdatePriceDto } from '../dto/update-price.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PriceService {
  constructor(private prisma: PrismaService) {}

  create(createPriceDto: CreatePriceDto) {
    return this.prisma.price.create({ data: createPriceDto });
  }

  findAll() {
    return this.prisma.price.findMany();
  }

  async findManyByProductId(productId: number) {
    const prices = await this.prisma.price.findMany({
      where: { productId },
    });

    const marketIds = prices.map((price) => price.marketId);

    const markets = await this.prisma.market.findMany({
      where: {
        id: { in: marketIds },
      },
      select: {
        id: true,
        name: true,
      },
    });

    const marketMap = new Map(markets.map((market) => [market.id, market]));

    const result = prices.map((price) => ({
      ...price,
      marketName: marketMap.get(price.marketId).name,
    }));

    return result;
  }

  findOne(id: number) {
    return this.prisma.price.findUnique({ where: { id } });
  }

  update(id: number, updatePriceDto: UpdatePriceDto) {
    return this.prisma.price.update({ where: { id }, data: updatePriceDto });
  }

  remove(id: number) {
    return this.prisma.price.delete({ where: { id } });
  }
}
