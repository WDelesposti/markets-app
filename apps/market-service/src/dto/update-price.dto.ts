import { ApiProperty } from '@nestjs/swagger';

export class UpdatePriceDto {
  @ApiProperty()
  name: string;
}