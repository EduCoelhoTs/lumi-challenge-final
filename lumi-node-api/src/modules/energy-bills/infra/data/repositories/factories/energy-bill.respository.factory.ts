import { dataSource } from '@shared/database';
import { EnergyBill } from '@energy-bills/domain';
import { EnergyBillRepository } from '@energy-bills/infra/data/repositories';

export const energyBillRespositoryFactory = (): EnergyBill.IRepository => {
  return EnergyBillRepository.createInstance(dataSource);
};
