import { randomUUID } from 'node:crypto';
import { EnergyBill } from '@energy-bills/domain';
import { DefaultUseCase } from '@shared/usecases';
import { CreateEnergyBillDataDTO } from '@energy-bills/application/dtos';

export namespace CreateEnergyBill {
  export type Input = CreateEnergyBillDataDTO;

  export type Output = void;

  export class UseCase implements DefaultUseCase<Input, Output> {
    constructor(private readonly repository: EnergyBill.IRepository) {}

    async execute(input: Input): Promise<Output> {
      const id = randomUUID();
      await EnergyBill.create(
        {
          ...input,
          id,
        } as EnergyBill.Interface,
        this.repository,
      );
    }
  }
}
