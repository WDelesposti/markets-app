import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MarketsService } from '../services/markets.service';
import { CreateMarketDto } from '../dto/create-market.dto';
import { UpdateMarketDto } from '../dto/update-market.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { MarketEntity } from '../entities/market.entity';

@Controller('markets')
@ApiTags('markets')
export class MarketsController {
  constructor(private readonly marketsService: MarketsService) {}

  @Post()
  @ApiCreatedResponse({ type: MarketEntity })
  create(@Body() createMarketDto: CreateMarketDto) {
    return this.marketsService.create(createMarketDto);
  }

  @Get()
  @ApiOkResponse({ type: [MarketEntity] })
  findAll() {
    return this.marketsService.findAll();
  }

  @Get(':name')
  @ApiOkResponse({ type: MarketEntity })
  findOneByName(@Param('name') name: string) {
    return this.marketsService.findOneByName(name);
  }
  

  @Get(':id')
  @ApiOkResponse({ type: MarketEntity })
  findOne(@Param('id') id: string) {
    return this.marketsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: MarketEntity })
  update(@Param('id') id: string, @Body() updateMarketDto: UpdateMarketDto) {
    return this.marketsService.update(+id, updateMarketDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: MarketEntity })
  remove(@Param('id') id: string) {
    return this.marketsService.remove(+id);
  }
}
