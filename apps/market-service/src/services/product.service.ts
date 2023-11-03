import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService){}
  
  create(createProductDto: CreateProductDto) {
    return this.prisma.product.create({data: createProductDto});
  }

  findAll() {
    return this.prisma.product.findMany();
  }

  findOneByName(name: string) {
    return this.prisma.product.findMany({where: {name: {contains: name, mode: 'insensitive'}}});
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({where: {id}});
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.prisma.product.update({where: {id}, data: updateProductDto});
  }

  remove(id: number) {
    return this.prisma.product.delete({where: {id}});
  }
}
