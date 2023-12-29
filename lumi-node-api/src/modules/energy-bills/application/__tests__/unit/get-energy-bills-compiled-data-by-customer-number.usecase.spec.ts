import { BadRequestError } from '@shared/errors';
import { CompiledData } from '@energy-bills/domain/dtos';
import { IGetCompiledDataService } from '@energy-bills/domain/services';
import { GetEnergyBillsCompiledDataByCustomerNumber } from '@energy-bills/application/usecases';

describe('GetEnergyBillsCompiledDataByCustomerNumber.UseCase unit tests', () => {
  let sut: GetEnergyBillsCompiledDataByCustomerNumber.UseCase;
  let data: CompiledData;
  let getCompiledDataService: IGetCompiledDataService;

  beforeEach(() => {
    data = {
      GDEconomy: 41,
      compensatedEnergyKWh: 23,
      electricPowerConsumption: 38,
      totalValueWithoutGD: 53,
    };
    getCompiledDataService = {
      execute: jest.fn().mockResolvedValue(data),
    } as any as IGetCompiledDataService;
    sut = new GetEnergyBillsCompiledDataByCustomerNumber.UseCase(
      getCompiledDataService,
    );
  });

  it('should return a correct compiledData by customer number', async () => {
    const result = await sut.execute({ customerNumber: '56789454545' });

    expect(result).toStrictEqual(data);
  });

  it('should throw a BadRequestError if the customerNumber is not given', async () => {
    await expect(sut.execute({ customerNumber: null })).rejects.toThrow(
      new BadRequestError('Nº do cliente é obrigatório'),
    );

    await expect(sut.execute({ customerNumber: undefined })).rejects.toThrow(
      new BadRequestError('Nº do cliente é obrigatório'),
    );

    await expect(sut.execute({ customerNumber: 0 as any })).rejects.toThrow(
      new BadRequestError('Nº do cliente é obrigatório'),
    );

    await expect(sut.execute({ customerNumber: false } as any)).rejects.toThrow(
      new BadRequestError('Nº do cliente é obrigatório'),
    );

    await expect(sut.execute({ customerNumber: '' } as any)).rejects.toThrow(
      new BadRequestError('Nº do cliente é obrigatório'),
    );
  });

  it('should throw if getCompiledDataService.execute throws', async () => {
    jest.spyOn(getCompiledDataService, 'execute').mockImplementationOnce(() => {
      throw new Error('');
    });

    await expect(
      sut.execute({ customerNumber: '56789454545' }),
    ).rejects.toThrow();
  });
});
