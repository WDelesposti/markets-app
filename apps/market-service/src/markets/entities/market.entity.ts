import { Market } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class MarketEntity implements Market {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}
