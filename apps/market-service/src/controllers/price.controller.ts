import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  UseGuards,
} from '@nestjs/common';
import { PriceService } from '../services/price.service';
import { CreatePriceDto } from '../dto/create-price.dto';
import { UpdatePriceDto } from '../dto/update-price.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { PriceEntity } from '../entities/price.entity';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('price')
@ApiTags('price')
@ApiBearerAuth()
export class PriceController {
  constructor(private readonly priceService: PriceService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiCreatedResponse({ type: PriceEntity })
  create(@Body() createPriceDto: CreatePriceDto) {
    if (createPriceDto.price === 0) {
      throw new HttpException('Price cannot be zero', 400);
    }

    if (createPriceDto.date === null) {
      throw new HttpException('Date cannot be null', 400);
    }

    if (createPriceDto.marketId === 0) {
      throw new HttpException('Market cannot be zero', 400);
    }

    if (createPriceDto.productId === 0) {
      throw new HttpException('Product cannot be zero', 400);
    }

    return this.priceService.create(createPriceDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: [PriceEntity] })
  findAll() {
    return this.priceService.findAll();
  }

  @Get(':productId')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: [PriceEntity] })
  findManyByProductId(@Param('productId') productId: string) {
    return this.priceService.findManyByProductId(+productId);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: PriceEntity })
  findOne(@Param('id') id: string) {
    return this.priceService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: PriceEntity })
  update(@Param('id') id: string, @Body() updatePriceDto: UpdatePriceDto) {
    return this.priceService.update(+id, updatePriceDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: PriceEntity })
  remove(@Param('id') id: string) {
    return this.priceService.remove(+id);
  }
}
