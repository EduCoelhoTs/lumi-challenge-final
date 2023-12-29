export type CreateEnergyBillDataDTO = {
  customerNumber: string;
  installationNumber: string;
  billMonth: string;
  energyQuantityKWh: number;
  energyValue: number;
  energySCEEEWithoutICMSQuantityKWh: number;
  energySCEEEWithoutICMSValue: number;
  compensatedEnergyGDIQuantityKWh: number;
  compensatedEnergyGDIValue: number;
  municipalPublicLightingContribution: number;
};
