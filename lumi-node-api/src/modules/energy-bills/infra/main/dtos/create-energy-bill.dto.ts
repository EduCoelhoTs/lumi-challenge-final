import { ApiProperty } from '@nestjs/swagger';

import { CreateEnergyBill } from '@energy-bills/application/usecases';

export class CreateEnergyBillDTO implements CreateEnergyBill.Input {
  @ApiProperty({ example: '755445255', required: true })
  customerNumber: string;

  @ApiProperty({ example: '30005445255', required: true })
  installationNumber: string;

  @ApiProperty({ example: 'JAN/2023', required: true })
  billMonth: string;

  @ApiProperty({ example: 750, required: true })
  energyQuantityKWh: number;

  @ApiProperty({ example: 120.5, required: true })
  energyValue: number;

  @ApiProperty({ example: 75, required: true })
  energySCEEEWithoutICMSQuantityKWh: number;

  @ApiProperty({ example: 20.5, required: true })
  energySCEEEWithoutICMSValue: number;

  @ApiProperty({ example: 50, required: true })
  compensatedEnergyGDIQuantityKWh: number;

  @ApiProperty({ example: 120.5, required: true })
  compensatedEnergyGDIValue: number;

  @ApiProperty({ example: 15, required: true })
  municipalPublicLightingContribution: number;
}
