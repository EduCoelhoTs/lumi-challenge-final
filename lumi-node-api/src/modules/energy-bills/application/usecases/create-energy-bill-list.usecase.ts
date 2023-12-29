import { randomUUID } from 'node:crypto';
import { IHttpClient } from '@shared/http';
import { EnergyBill } from '@energy-bills/domain';
import { DefaultUseCase } from '@shared/usecases';
import { CreateEnergyBillDataDTO } from '@energy-bills/application/dtos';

export namespace CreateEnergyBillList {
  export type Input = null;

  export type Output = void;

  export class UseCase implements DefaultUseCase<Input, Output> {
    constructor(
      private readonly repository: EnergyBill.IRepository,
      private readonly httpClient: IHttpClient,
    ) {}

    async execute(): Promise<Output> {
      try {
        const { data: energyBills } =
          await this.httpClient.get<CreateEnergyBillDataDTO[]>('');

        for (const energyBill of energyBills) {
          const energyBillExists =
            await this.repository.findOneByCustomerNumberAndBillMonth(
              String(energyBill?.customerNumber),
              energyBill?.billMonth,
              ['id'],
            );
          if (energyBillExists) {
            continue;
          }

          await this.crateEnergyBill(energyBill);
        }
      } catch (error) {
        console.error(error);
      }
    }

    private async crateEnergyBill(
      input: CreateEnergyBillDataDTO,
    ): Promise<void> {
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
