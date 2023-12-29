import { ApiResponseOptions } from '@nestjs/swagger';

export const getAllEnergyBillsSeccesfulResponse: ApiResponseOptions = {
  status: 200,
  schema: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          nullable: false,
        },
        billMonth: {
          type: 'string',
          nullable: false,
        },
        customerNumber: {
          type: 'string',
          nullable: false,
        },
        installationNumber: {
          type: 'string',
          nullable: false,
        },
        energyQuantityKWh: {
          type: 'number',
          nullable: false,
        },
        energyValue: {
          type: 'number',
          nullable: false,
        },
        energySCEEEWithoutICMSQuantityKWh: {
          type: 'number',
          nullable: false,
        },
        energySCEEEWithoutICMSValue: {
          type: 'number',
          nullable: false,
        },
        compensatedEnergyGDIQuantityKWh: {
          type: 'number',
          nullable: false,
        },
        compensatedEnergyGDIValue: {
          type: 'number',
          nullable: false,
        },
        municipalPublicLightingContribution: {
          type: 'number',
          nullable: false,
        },
      },
    },
  },
};
