import { BadRequestError } from '@shared/errors';
import { DefaultUseCase } from '@shared/usecases';
import { EnergyBill } from '@energy-bills/domain';
import { MonthlyCompiledData } from '@energy-bills/domain/dtos';

export namespace GetMonthlyEnergyBillCompiledDataByCustomerNumber {
  export type Input = {
    customerNumber: string;
  };

  export type Output = Promise<MonthlyCompiledData[]>;

  export class UseCase implements DefaultUseCase<Input, Output> {
    constructor(private readonly repository: EnergyBill.IRepository) {}

    async execute({ customerNumber }: Input): Promise<Output> {
      if (!customerNumber) {
        throw new BadRequestError('Nº do cliente é obrigatório');
      }

      const energyBills = await this.repository.findAllByCustomerNumber(
        customerNumber,
        [
          'energyQuantityKWh',
          'energySCEEEWithoutICMSValue',
          'compensatedEnergyGDIQuantityKWh',
          'energyValue',
          'energySCEEEWithoutICMSValue',
          'municipalPublicLightingContribution',
          'compensatedEnergyGDIValue',
          'billMonth',
        ],
      );

      return energyBills.map((energyBill) => {
        const compiledData = EnergyBill.calculateCompiledData(energyBill);

        return {
          billMonth: energyBill.billMonth,
          ...compiledData,
        };
      });
    }
  }
}
