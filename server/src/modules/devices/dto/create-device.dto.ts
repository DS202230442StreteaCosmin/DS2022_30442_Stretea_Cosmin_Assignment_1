import { ApiProperty } from '@nestjs/swagger';

export class CreateDeviceDto {
  @ApiProperty()
  description: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  maxHourlyConsumption: number;
}
