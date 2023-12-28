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
  UseGuards,
} from '@nestjs/common';
import { MarketsService } from '../services/markets.service';
import { CreateMarketDto } from '../dto/create-market.dto';
import { UpdateMarketDto } from '../dto/update-market.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { MarketEntity } from '../entities/market.entity';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('markets')
@ApiTags('markets')
@ApiBearerAuth()
export class MarketsController {
  constructor(private readonly marketsService: MarketsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiCreatedResponse({ type: MarketEntity })
  create(@Body() createMarketDto: CreateMarketDto) {
    try {
      return this.marketsService.create(createMarketDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: [MarketEntity] })
  findAll() {
    return this.marketsService.findAll();
  }

  @Get(':name')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: MarketEntity })
  findOneByName(@Param('name') name: string) {
    return this.marketsService.findOneByName(name);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: MarketEntity })
  findOne(@Param('id') id: string) {
    return this.marketsService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: MarketEntity })
  update(@Param('id') id: string, @Body() updateMarketDto: UpdateMarketDto) {
    return this.marketsService.update(+id, updateMarketDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ type: MarketEntity })
  remove(@Param('id') id: string) {
    try {
      return this.marketsService.remove(+id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
