import {
  GetCompiledDataService,
  IGetCompiledDataService,
} from '@energy-bills/domain/services';
import {
  CompiledDataBuilder,
  ICompiledDataBuilder,
} from '@energy-bills/domain/builders';
import { energyBillRespositoryFactory } from '@energy-bills/infra/data/repositories/factories';
import { GetEnergyBillsCompiledDataByCustomerNumber } from '@energy-bills/application/usecases';

export const getEnergyBillsCompiledDataByCustomerNumberUsecaseFactory =
  (): GetEnergyBillsCompiledDataByCustomerNumber.UseCase => {
    const repo = energyBillRespositoryFactory();
    const compiledDataBuilder: ICompiledDataBuilder = new CompiledDataBuilder();
    const getCompiledDataService: IGetCompiledDataService =
      new GetCompiledDataService(repo, compiledDataBuilder);

    return new GetEnergyBillsCompiledDataByCustomerNumber.UseCase(
      getCompiledDataService,
    );
  };
