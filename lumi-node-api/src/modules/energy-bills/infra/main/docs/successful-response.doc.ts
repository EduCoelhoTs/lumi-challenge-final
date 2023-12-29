import { ApiResponseOptions } from '@nestjs/swagger';

export const seccesfulResponse: ApiResponseOptions = {
  status: 200,
  schema: {
    properties: {
      electricPowerConsumption: {
        type: 'number',
        nullable: false,
      },
      compensatedEnergyKWh: {
        type: 'number',
        nullable: false,
      },
      totalValueWithoutGD: {
        type: 'number',
        nullable: false,
      },
      GDEconomy: {
        type: 'number',
        nullable: false,
      },
    },
  },
};
