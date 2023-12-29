import { CreateEnergyBill } from '@energy-bills/application/usecases';
import { energyBillRespositoryFactory } from '@energy-bills/infra/data/repositories/factories';

export const createEnergyBillUsecaseFactory = (): CreateEnergyBill.UseCase => {
  const repo = energyBillRespositoryFactory();

  return new CreateEnergyBill.UseCase(repo);
};
