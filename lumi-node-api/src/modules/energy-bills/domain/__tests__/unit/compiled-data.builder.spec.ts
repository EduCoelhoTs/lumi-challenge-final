import {
  CompiledDataBuilder,
  ICompiledDataBuilder,
} from '@energy-bills/domain/builders';
import { CompiledData } from '@energy-bills/domain/dtos';

describe('CompiledDataBuilder unit tests', () => {
  let sut: ICompiledDataBuilder;
  beforeEach(() => {
    sut = new CompiledDataBuilder();
  });

  it('the sut should be defined', () => {
    expect(sut).toBeDefined();
  });

  it('should return a correct compiledData', () => {
    const result = sut
      .addToElectricPowerConsumption(10)
      .addToCompensatedEnergyKWh(5)
      .addToTotalValueWithoutGD(17)
      .addToGDEconomy(13)
      .getCompiledData();

    expect(result).toStrictEqual({
      electricPowerConsumption: 10,
      compensatedEnergyKWh: 5,
      totalValueWithoutGD: 17,
      GDEconomy: 13,
    });
  });

  it('should return a correct compiledData after loop', () => {
    let result: CompiledData = {
      electricPowerConsumption: 0,
      compensatedEnergyKWh: 0,
      totalValueWithoutGD: 0,
      GDEconomy: 0,
    };

    for (let i = 0; i <= 2; i++) {
      result = sut
        .addToElectricPowerConsumption(10)
        .addToCompensatedEnergyKWh(5)
        .addToTotalValueWithoutGD(17)
        .addToGDEconomy(13)
        .getCompiledData();
    }

    expect(result).toStrictEqual({
      electricPowerConsumption: 30,
      compensatedEnergyKWh: 15,
      totalValueWithoutGD: 51,
      GDEconomy: 39,
    });
  });
});
