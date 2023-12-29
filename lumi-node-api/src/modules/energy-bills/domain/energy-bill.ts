import {
  ICreate,
  IFindAll,
  IFindAllByCustomerNumber,
  IFindOneByCustomerNumberAndBillMonth,
  IFindOneByInstallationNumberAndBillMonth,
} from '@shared/repositories';
import { IEntity } from '@shared/entities';
import { Validation } from '@shared/validations';
import { CompiledData } from '@energy-bills/domain/dtos';
import { createEnergyBillValidatorFactory } from '@energy-bills/domain';

export namespace EnergyBill {
  export interface Interface extends IEntity {
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
  }

  export interface IRepository<E = Interface>
    extends ICreate<E>,
      IFindAll<E>,
      IFindAllByCustomerNumber<E>,
      IFindOneByCustomerNumberAndBillMonth<E>,
      IFindOneByInstallationNumberAndBillMonth<E> {}

  export const create = (
    data: Interface,
    repository: IRepository,
  ): Promise<Interface> => {
    const validator: Validation = createEnergyBillValidatorFactory();
    validator.validate(data);

    return repository.create(data);
  };

  export const calculateCompiledData = (
    energyBill: Interface | Partial<Interface>,
  ): CompiledData => {
    return {
      electricPowerConsumption:
        Number(energyBill?.energyQuantityKWh) +
        Number(energyBill?.energySCEEEWithoutICMSValue),
      compensatedEnergyKWh: Number(energyBill?.compensatedEnergyGDIQuantityKWh),
      totalValueWithoutGD:
        Number(energyBill?.energyValue) +
        Number(energyBill?.energySCEEEWithoutICMSValue) +
        Number(energyBill?.municipalPublicLightingContribution),
      GDEconomy: Number(energyBill?.compensatedEnergyGDIValue),
    };
  };
}
