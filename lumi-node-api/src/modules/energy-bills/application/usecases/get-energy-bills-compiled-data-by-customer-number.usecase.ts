import { BadRequestError } from '@shared/errors';
import { DefaultUseCase } from '@shared/usecases';
import { CompiledData } from '@energy-bills/domain/dtos';
import { IGetCompiledDataService } from '@energy-bills/domain/services';

export namespace GetEnergyBillsCompiledDataByCustomerNumber {
  export type Input = {
    customerNumber: string;
  };

  export type Output = Promise<CompiledData>;

  export class UseCase implements DefaultUseCase<Input, Output> {
    constructor(
      private readonly getCompiledDataService: IGetCompiledDataService,
    ) {}

    async execute({ customerNumber }: Input): Promise<Output> {
      if (!customerNumber) {
        throw new BadRequestError('Nº do cliente é obrigatório');
      }

      return this.getCompiledDataService.execute(customerNumber);
    }
  }
}
