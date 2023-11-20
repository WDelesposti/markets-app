import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateMarketDto } from '../dto/create-market.dto';
import { UpdateMarketDto } from '../dto/update-market.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MarketsService {
  constructor(private prisma: PrismaService){}
  
  async create(createMarketDto: CreateMarketDto) {
    if (createMarketDto.name === '') {
      throw new Error('Market name cannot be empty');
    }

    const exist = await this.findOneByName(createMarketDto.name)
    if (exist.length > 0) {
      throw new HttpException('Market name already exist', HttpStatus.CONFLICT);
    }
    return this.prisma.market.create({data: createMarketDto});
  }
  
  findAll() {
    return this.prisma.market.findMany();
  }
  
  findOne(id: number) {
    return this.prisma.market.findUnique({where: {id}});
  }
  
  findOneByName(name: string) {
    return this.prisma.market.findMany({where: {name: {contains: name, mode: 'insensitive'}}});
  }

  async update(id: number, updateMarketDto: UpdateMarketDto) {
    const market = await this.prisma.market.findUnique({where: {id}});
    if (!market) {
      throw new HttpException('Market not found', HttpStatus.NOT_FOUND);
    }
    return this.prisma.market.update({where: {id}, data: updateMarketDto});
  }

  async remove(id: number) {
    const market = await this.prisma.market.findUnique({where: {id}});
    if (!market) {
      throw new HttpException('Market not found', HttpStatus.NOT_FOUND);
    }
    return this.prisma.market.delete({where: {id}});
  }
}
