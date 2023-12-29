import { EnergyBill } from '@energy-bills/domain';

export const mockedEnergyBill: EnergyBill.Interface = {
  id: '29ac8d30-23e0-4008-8fe5-ff2c2083813d',
  customerNumber: '13',
  installationNumber: '1546513',
  billMonth: 'JAN/2023',
  energyQuantityKWh: 12,
  energyValue: 15,
  energySCEEEWithoutICMSQuantityKWh: 10,
  energySCEEEWithoutICMSValue: 7,
  compensatedEnergyGDIQuantityKWh: 8,
  compensatedEnergyGDIValue: 20,
  municipalPublicLightingContribution: 7,
};

export const mockedEnergyBillList: EnergyBill.Interface[] = [
  {
    id: '29ac8d30-23e0-4008-8fe5-ff2c2083813d',
    customerNumber: '13',
    installationNumber: '1546513',
    billMonth: 'JAN/2023',
    energyQuantityKWh: 12,
    energyValue: 15,
    energySCEEEWithoutICMSQuantityKWh: 10,
    energySCEEEWithoutICMSValue: 7,
    compensatedEnergyGDIQuantityKWh: 8,
    compensatedEnergyGDIValue: 20,
    municipalPublicLightingContribution: 7,
  },
  {
    id: '29ac8d30-23e0-4008-8fe4-ff2c2083813d',
    customerNumber: '5',
    installationNumber: '1546517',
    billMonth: 'FEV/2023',
    energyQuantityKWh: 10,
    energyValue: 8,
    energySCEEEWithoutICMSQuantityKWh: 7,
    energySCEEEWithoutICMSValue: 9,
    compensatedEnergyGDIQuantityKWh: 15,
    compensatedEnergyGDIValue: 21,
    municipalPublicLightingContribution: 7,
  },
];
