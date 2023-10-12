import { ApiProperty } from '@nestjs/swagger';

export class CreateMarketDto {
  @ApiProperty()
  name: string;
}