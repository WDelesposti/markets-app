import { Price } from '../../node_modules/.prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class PriceEntity implements Price {
  @ApiProperty()
  id: number;

  @ApiProperty()
  price: number;

  @ApiProperty()
  date: Date;

  @ApiProperty()
  marketId: number;

  @ApiProperty()
  productId: number;
}
