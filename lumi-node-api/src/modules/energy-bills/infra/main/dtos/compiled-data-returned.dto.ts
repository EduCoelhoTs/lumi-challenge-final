import { CompiledData } from '@energy-bills/domain/dtos';

export class CompiledDataReturnedDTO implements CompiledData {
  electricPowerConsumption: number;
  compensatedEnergyKWh: number;
  totalValueWithoutGD: number;
  GDEconomy: number;
}
