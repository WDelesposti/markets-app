import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ProductEntity } from '../entities/product.entity';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('product')
@ApiTags('product')
@ApiBearerAuth()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiCreatedResponse({ type: ProductEntity })
  create(@Query() createProductDto: CreateProductDto) {
    try {
      return this.productService.create(createProductDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: [ProductEntity] })
  findAll() {
    return this.productService.findAll();
  }

  @Get(':name')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: ProductEntity })
  findOneByName(@Param('name') name: string) {
    return this.productService.findOneByName(name);
  }

  @Get(':name/:brand')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: ProductEntity })
  findOneByNameAndBrand(
    @Param('name') name: string,
    @Param('brand') brand: string
  ) {
    return this.productService.findOneByNameAndBrand(name, brand);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: ProductEntity })
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: ProductEntity })
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: ProductEntity })
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
