import { ApiProperty } from '@nestjs/swagger';

export class EnergyBillSelectedFieldsDTO {
  @ApiProperty({ example: 'id,customerNumber,billMonth', required: false })
  selectedFields: string;
}
