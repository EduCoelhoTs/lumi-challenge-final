import { energyBillRespositoryFactory } from '@energy-bills/infra/data/repositories/factories';
import { GetMonthlyEnergyBillCompiledDataByCustomerNumber } from '@energy-bills/application/usecases';

export const getMonthlyEnergyBillCompiledDataByCustomerNumberUsecaseFactory =
  (): GetMonthlyEnergyBillCompiledDataByCustomerNumber.UseCase => {
    const repo = energyBillRespositoryFactory();

    return new GetMonthlyEnergyBillCompiledDataByCustomerNumber.UseCase(repo);
  };
