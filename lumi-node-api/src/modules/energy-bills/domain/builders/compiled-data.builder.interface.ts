import { CompiledData } from '@energy-bills/domain/dtos';

export interface ICompiledDataBuilder {
  addToElectricPowerConsumption(value: number): this;
  addToCompensatedEnergyKWh(value: number): this;
  addToTotalValueWithoutGD(value: number): this;
  addToGDEconomy(value: number): this;
  getCompiledData(): CompiledData;
}
