import { BadRequestError } from '@shared/errors';
import { EnergyBill } from '@energy-bills/domain';
import { MonthlyCompiledData } from '@energy-bills/domain/dtos';
import { mockedEnergyBillList } from '@energy-bills/domain/__tests__/mock';
import { GetMonthlyEnergyBillCompiledDataByCustomerNumber } from '@energy-bills/application/usecases';

describe('GetMonthlyEnergyBillCompiledDataByCustomerNumber.UseCase unit tests', () => {
  let sut: GetMonthlyEnergyBillCompiledDataByCustomerNumber.UseCase;
  let data: MonthlyCompiledData[];
  let repository: EnergyBill.IRepository;

  beforeEach(() => {
    data = [
      {
        GDEconomy: 20,
        billMonth: 'JAN/2023',
        compensatedEnergyKWh: 8,
        electricPowerConsumption: 19,
        totalValueWithoutGD: 29,
      },
      {
        GDEconomy: 21,
        billMonth: 'FEV/2023',
        compensatedEnergyKWh: 15,
        electricPowerConsumption: 19,
        totalValueWithoutGD: 24,
      },
    ];
    repository = {
      findAllByCustomerNumber: jest
        .fn()
        .mockResolvedValue(mockedEnergyBillList),
    } as any as EnergyBill.IRepository;
    sut = new GetMonthlyEnergyBillCompiledDataByCustomerNumber.UseCase(
      repository,
    );
  });

  it('should return a list of MonthlyCompiledData by customer number', async () => {
    const result = await sut.execute({ customerNumber: '56789454545' });

    expect(result).toStrictEqual(data);
  });

  it('should throw a BadRequestError if the customerNumber is not given', async () => {
    await expect(sut.execute({ customerNumber: null } as any)).rejects.toThrow(
      new BadRequestError('Nº do cliente é obrigatório'),
    );

    await expect(
      sut.execute({ customerNumber: undefined } as any),
    ).rejects.toThrow(new BadRequestError('Nº do cliente é obrigatório'));

    await expect(sut.execute({ customerNumber: 0 } as any)).rejects.toThrow(
      new BadRequestError('Nº do cliente é obrigatório'),
    );

    await expect(sut.execute({ customerNumber: false } as any)).rejects.toThrow(
      new BadRequestError('Nº do cliente é obrigatório'),
    );

    await expect(sut.execute({ customerNumber: '' } as any)).rejects.toThrow(
      new BadRequestError('Nº do cliente é obrigatório'),
    );
  });

  it('should throw if repository.findAllByCustomerNumber throws', async () => {
    jest
      .spyOn(repository, 'findAllByCustomerNumber')
      .mockImplementationOnce(() => {
        throw new Error('');
      });

    await expect(
      sut.execute({ customerNumber: '56789454545' }),
    ).rejects.toThrow();
  });
});
