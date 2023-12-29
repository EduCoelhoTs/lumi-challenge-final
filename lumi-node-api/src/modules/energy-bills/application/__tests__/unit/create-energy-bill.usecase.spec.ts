import { CreateEnergyBill } from '@energy-bills/application/usecases';
import { EnergyBill } from '@energy-bills/domain';
import { mockedEnergyBill } from '@energy-bills/domain/__tests__/mock';

describe('CreateEnergyBill.UseCase unit tests', () => {
  let sut: CreateEnergyBill.UseCase;
  let data: CreateEnergyBill.Input;
  let repository: EnergyBill.IRepository;

  beforeEach(() => {
    data = mockedEnergyBill;
    repository = {
      create: jest.fn().mockResolvedValue(data),
    } as any as EnergyBill.IRepository;
    sut = new CreateEnergyBill.UseCase(repository);
  });

  it('should create an energy bill', async () => {
    const result = await sut.execute(data);

    expect(result).toBeUndefined();
  });
});
