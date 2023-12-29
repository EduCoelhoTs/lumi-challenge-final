import { DefaultUseCase } from '@shared/usecases';
import { EnergyBill } from '@energy-bills/domain';

export namespace GetAllEnergyBills {
  export type Input = {
    selectedFields?: (keyof EnergyBill.Interface)[];
  } | null;

  export type Output = Promise<
    EnergyBill.Interface[] | Partial<EnergyBill.Interface[]>
  >;

  export class UseCase implements DefaultUseCase<Input, Output> {
    constructor(private readonly repository: EnergyBill.IRepository) {}

    async execute(input: Input): Promise<Output> {
      return this.repository.findAll(input?.selectedFields || []);
    }
  }
}
