import {
  MinLengthFieldValidation,
  RequiredFieldValidation,
  UUIDValidation,
  Validation,
  ValidationComposite,
} from '@shared/validations';
import { EnergyBill } from '@energy-bills/domain';

export const createEnergyBillValidatorFactory = () => {
  const validations: Validation<EnergyBill.Interface>[] = [
    new UUIDValidation('id'),
    new MinLengthFieldValidation('billMonth', 8),
    new RequiredFieldValidation('compensatedEnergyGDIQuantityKWh'),
    new RequiredFieldValidation('compensatedEnergyGDIValue'),
    new RequiredFieldValidation('customerNumber'),
    new RequiredFieldValidation('installationNumber'),
    new RequiredFieldValidation('energyQuantityKWh'),
    new RequiredFieldValidation('energySCEEEWithoutICMSQuantityKWh'),
    new RequiredFieldValidation('energySCEEEWithoutICMSValue'),
    new RequiredFieldValidation('energyValue'),
    new RequiredFieldValidation('municipalPublicLightingContribution'),
    new UUIDValidation('createdBy', false),
    new UUIDValidation('deletedBy', false),
    new UUIDValidation('updatedBy', false),
  ];

  return new ValidationComposite(validations);
};
