import { CompiledData } from '@energy-bills/domain/dtos';
import { ICompiledDataBuilder } from '@energy-bills/domain/builders';

export class CompiledDataBuilder implements ICompiledDataBuilder {
  private readonly data: CompiledData = {
    electricPowerConsumption: 0,
    compensatedEnergyKWh: 0,
    totalValueWithoutGD: 0,
    GDEconomy: 0,
  };

  public addToElectricPowerConsumption(value: number): this {
    this.data.electricPowerConsumption =
      Number(this.data.electricPowerConsumption) + Number(value);

    return this;
  }

  public addToCompensatedEnergyKWh(value: number): this {
    this.data.compensatedEnergyKWh =
      Number(this.data.compensatedEnergyKWh) + Number(value);

    return this;
  }

  public addToTotalValueWithoutGD(value: number): this {
    this.data.totalValueWithoutGD =
      Number(this.data.totalValueWithoutGD) + Number(value);

    return this;
  }

  public addToGDEconomy(value: number): this {
    this.data.GDEconomy = Number(this.data.GDEconomy) + Number(value);

    return this;
  }

  public getCompiledData(): CompiledData {
    return this.data;
  }
}
