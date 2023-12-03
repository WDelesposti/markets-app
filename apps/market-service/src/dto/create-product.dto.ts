import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  brand: string;

  @ApiProperty()
  size: number;

  @ApiProperty( { enum: ['L', 'ML', 'G', 'MG', 'KG', 'UN', 'PCT', 'CX'] })
  measurement: string;
}