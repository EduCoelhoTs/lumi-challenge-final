import { GetAllEnergyBills } from '@energy-bills/application/usecases';
import { energyBillRespositoryFactory } from '@energy-bills/infra/data/repositories/factories';

export const getAllEnergyBillsUsecaseFactory =
  (): GetAllEnergyBills.UseCase => {
    const repo = energyBillRespositoryFactory();

    return new GetAllEnergyBills.UseCase(repo);
  };
