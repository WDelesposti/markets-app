import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PriceService } from '../services/price.service';
import { CreatePriceDto } from '../dto/create-price.dto';
import { UpdatePriceDto } from '../dto/update-price.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PriceEntity } from '../entities/price.entity';

@Controller('price')
@ApiTags('price')
export class PriceController {
  constructor(private readonly priceService: PriceService) {}

  @Post()
  @ApiCreatedResponse({ type: PriceEntity })
  create(@Body() createPriceDto: CreatePriceDto) {
    return this.priceService.create(createPriceDto);
  }

  @Get()
  @ApiOkResponse({ type: [PriceEntity] })
  findAll() {
    return this.priceService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: PriceEntity })
  findOne(@Param('id') id: string) {
    return this.priceService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: PriceEntity })
  update(@Param('id') id: string, @Body() updatePriceDto: UpdatePriceDto) {
    return this.priceService.update(+id, updatePriceDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: PriceEntity })
  remove(@Param('id') id: string) {
    return this.priceService.remove(+id);
  }
}
