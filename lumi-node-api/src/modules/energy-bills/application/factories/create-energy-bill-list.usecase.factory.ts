import { EnergyBill } from '@energy-bills/domain';
import { IHttpClient, httpClientFactory } from '@shared/http';
import { CreateEnergyBillList } from '@energy-bills/application/usecases';
import { energyBillRespositoryFactory } from '@energy-bills/infra/data/repositories/factories';

export const createEnergyBillListUsecaseFactory =
  (): CreateEnergyBillList.UseCase => {
    const repo: EnergyBill.IRepository = energyBillRespositoryFactory();
    const httpClient: IHttpClient = httpClientFactory();

    return new CreateEnergyBillList.UseCase(repo, httpClient);
  };
