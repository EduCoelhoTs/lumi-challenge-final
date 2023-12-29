import { EnergyBill } from '@energy-bills/domain';
import { GetAllEnergyBills } from '@energy-bills/application/usecases';
import { mockedEnergyBillList } from '@energy-bills/domain/__tests__/mock';

describe('GetAllEnergyBills.UseCase unit tests', () => {
  let sut: GetAllEnergyBills.UseCase;
  let data: EnergyBill.Interface[] | Partial<EnergyBill.Interface[]>;
  let repository: EnergyBill.IRepository;

  beforeEach(() => {
    data = mockedEnergyBillList;
    repository = {
      findAll: jest.fn().mockResolvedValue(mockedEnergyBillList),
    } as any as EnergyBill.IRepository;
    sut = new GetAllEnergyBills.UseCase(repository);
  });

  it('should return a correct compiledData by customer number', async () => {
    const result = await sut.execute(null);

    expect(result).toStrictEqual(data);
  });

  it('should throw if repository.findAll throws', async () => {
    jest.spyOn(repository, 'findAll').mockImplementationOnce(() => {
      throw new Error('');
    });

    await expect(sut.execute(null)).rejects.toThrow();
  });
});
