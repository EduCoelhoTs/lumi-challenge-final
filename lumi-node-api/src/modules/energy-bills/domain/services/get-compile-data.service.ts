import { EnergyBill } from '@energy-bills/domain';
import { CompiledData } from '@energy-bills/domain/dtos';
import { ICompiledDataBuilder } from '@energy-bills/domain/builders';
import { IGetCompiledDataService } from './get-compile-data.service.interface';

export class GetCompiledDataService implements IGetCompiledDataService {
  constructor(
    private readonly readingRepo: EnergyBill.IRepository,
    private readonly compiledDataBuilder: ICompiledDataBuilder,
  ) {}

  public async execute(customerNumber: string): Promise<CompiledData> {
    const energyBills: EnergyBill.Interface[] =
      await this.readingRepo.findAllByCustomerNumber(customerNumber);
    let compiledData: CompiledData = {
      electricPowerConsumption: 0,
      compensatedEnergyKWh: 0,
      totalValueWithoutGD: 0,
      GDEconomy: 0,
    };

    for (const energyBill of energyBills) {
      const {
        electricPowerConsumption,
        compensatedEnergyKWh,
        totalValueWithoutGD,
        GDEconomy,
      } = EnergyBill.calculateCompiledData(energyBill);
      compiledData = this.compiledDataBuilder
        .addToElectricPowerConsumption(electricPowerConsumption)
        .addToCompensatedEnergyKWh(compensatedEnergyKWh)
        .addToTotalValueWithoutGD(totalValueWithoutGD)
        .addToGDEconomy(GDEconomy)
        .getCompiledData();
    }

    return compiledData;
  }
}
