import {
  CompiledDataBuilder,
  ICompiledDataBuilder,
} from '@energy-bills/domain/builders';
import {
  GetCompiledDataService,
  IGetCompiledDataService,
} from '@energy-bills/domain/services';
import { EnergyBill } from '@energy-bills/domain';
import { mockedEnergyBillList } from '@energy-bills/domain/__tests__/mock';

describe('GetCompiledDataService unit tests', () => {
  let sut: IGetCompiledDataService;
  let readingRepo: EnergyBill.IRepository;
  let compiledDataBuilder: ICompiledDataBuilder;

  beforeEach(() => {
    readingRepo = {
      create: jest.fn(),
      findAllByCustomerNumber: jest
        .fn()
        .mockResolvedValue(mockedEnergyBillList),
    } as any as EnergyBill.IRepository;
    compiledDataBuilder = new CompiledDataBuilder();
    sut = new GetCompiledDataService(readingRepo, compiledDataBuilder);
  });

  it('the sut, readingRepo and compiledDataBuilder should be defined', () => {
    expect(sut).toBeDefined();
    expect(readingRepo).toBeDefined();
    expect(compiledDataBuilder).toBeDefined();
  });

  it('should return a correct compiledData', async () => {
    const result = await sut.execute('774545451');

    expect(result).toStrictEqual({
      GDEconomy: 41,
      compensatedEnergyKWh: 23,
      electricPowerConsumption: 38,
      totalValueWithoutGD: 53,
    });
  });

  it('should throw if readingRepo.findAllByCustomerNumber throws', async () => {
    jest
      .spyOn(readingRepo, 'findAllByCustomerNumber')
      .mockImplementationOnce(() => {
        throw new Error('');
      });

    await expect(sut.execute('774545451')).rejects.toThrow();
  });

  it('should throw if compiledDataBuilder.addToCompensatedEnergyKWh throws', async () => {
    jest
      .spyOn(compiledDataBuilder, 'addToCompensatedEnergyKWh')
      .mockImplementationOnce(() => {
        throw new Error('');
      });

    await expect(sut.execute('774545451')).rejects.toThrow();
  });

  it('should throw if compiledDataBuilder.addToElectricPowerConsumption throws', async () => {
    jest
      .spyOn(compiledDataBuilder, 'addToElectricPowerConsumption')
      .mockImplementationOnce(() => {
        throw new Error('');
      });

    await expect(sut.execute('774545451')).rejects.toThrow();
  });

  it('should throw if compiledDataBuilder.addToGDEconomy throws', async () => {
    jest
      .spyOn(compiledDataBuilder, 'addToGDEconomy')
      .mockImplementationOnce(() => {
        throw new Error('');
      });

    await expect(sut.execute('774545451')).rejects.toThrow();
  });

  it('should throw if compiledDataBuilder.addToTotalValueWithoutGD throws', async () => {
    jest
      .spyOn(compiledDataBuilder, 'addToTotalValueWithoutGD')
      .mockImplementationOnce(() => {
        throw new Error('');
      });

    await expect(sut.execute('774545451')).rejects.toThrow();
  });

  it('should throw if compiledDataBuilder.getCompiledData throws', async () => {
    jest
      .spyOn(compiledDataBuilder, 'getCompiledData')
      .mockImplementationOnce(() => {
        throw new Error('');
      });

    await expect(sut.execute('774545451')).rejects.toThrow();
  });
});
