import { ApiProperty } from '@nestjs/swagger';

export class CreatePriceDto {
  @ApiProperty()
  price: number;

  @ApiProperty()
  date: Date;

  @ApiProperty()
  marketId: number;

  @ApiProperty()
  productId: number;
}