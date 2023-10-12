import { ApiProperty } from '@nestjs/swagger';

export class UpdateMarketDto {
  @ApiProperty()
  name: string;
}