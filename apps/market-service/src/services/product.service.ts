import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    if (createProductDto.name === '') {
      throw new Error('Product name cannot be empty');
    }
    createProductDto.name = createProductDto.name.trim().toUpperCase();

    if (createProductDto.brand === '') {
      throw new Error('Brand cannot be empty');
    }
    createProductDto.brand = createProductDto.brand.trim().toUpperCase();

    const exist = await this.findOneByNameAndBrand(
      createProductDto.name,
      createProductDto.brand,
    );

    if (exist.length > 0) {
      throw new HttpException('Product already exist', HttpStatus.CONFLICT);
    }

    createProductDto.size = Number(createProductDto.size);
    if (isNaN(createProductDto.size)) {
      throw new Error('Size must be a number');
    }

    if (createProductDto.size === 0) {
      throw new Error('Size cannot be zero');
    }
    if (createProductDto.measurement === '') {
      throw new Error('Measurement cannot be empty');
    }
    createProductDto.measurement = createProductDto.measurement
      .trim()
      .toUpperCase();

    return this.prisma.product.create({ data: createProductDto });
  }

  findAll() {
    return this.prisma.product.findMany();
  }

  findOneByName(name: string) {
    return this.prisma.product.findMany({
      where: { name: { contains: name, mode: 'insensitive' } },
    });
  }

  findOneByNameAndBrand(name: string, brand: string) {
    return this.prisma.product.findMany({
      where: {
        name: { equals: name, mode: 'insensitive' },
        brand: { equals: brand, mode: 'insensitive' },
      },
    });
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({ where: { id } });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.prisma.product.update({
      where: { id },
      data: updateProductDto,
    });
  }

  remove(id: number) {
    return this.prisma.product.delete({ where: { id } });
  }
}
