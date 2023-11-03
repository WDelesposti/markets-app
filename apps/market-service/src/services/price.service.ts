import { Injectable } from '@nestjs/common';
import { CreatePriceDto } from '../dto/create-price.dto';
import { UpdatePriceDto } from '../dto/update-price.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PriceService {
  constructor(private prisma: PrismaService){}
  
  create(createPriceDto: CreatePriceDto) {
    return this.prisma.price.create({data: createPriceDto});
  }

  findAll() {
    return this.prisma.price.findMany();
  }

  findOne(id: number) {
    return this.prisma.price.findUnique({where: {id}});
  }

  update(id: number, updatePriceDto: UpdatePriceDto) {
    return this.prisma.price.update({where: {id}, data: updatePriceDto});
  }

  remove(id: number) {
    return this.prisma.price.delete({where: {id}});
  }
}
