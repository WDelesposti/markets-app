import { ApiProperty } from '@nestjs/swagger';

export class UpdatePriceDto {
  @ApiProperty()
  price: number;

  @ApiProperty()
  date: Date;

  @ApiProperty()
  marketId: number;

  @ApiProperty()
  productId: number;
}