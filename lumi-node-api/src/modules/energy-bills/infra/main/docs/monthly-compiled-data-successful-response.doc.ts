import { ApiResponseOptions } from '@nestjs/swagger';

export const monthlyCompiledDataSeccesfulResponse: ApiResponseOptions = {
  status: 200,
  schema: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        billMonth: {
          type: 'string',
          nullable: false,
        },
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
  },
};
