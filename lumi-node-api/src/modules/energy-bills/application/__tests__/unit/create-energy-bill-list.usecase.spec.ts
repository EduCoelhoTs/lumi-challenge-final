import { IHttpClient } from '@shared/http';
import {
  mockedEnergyBill,
  mockedEnergyBillList,
} from '@energy-bills/domain/__tests__/mock';
import { EnergyBill } from '@energy-bills/domain';
import { CreateEnergyBillList } from '@energy-bills/application/usecases';

describe('CreateEnergyBillList.UseCase unit tests', () => {
  let sut: CreateEnergyBillList.UseCase;
  let repository: EnergyBill.IRepository;
  let httpClient: IHttpClient;

  beforeEach(() => {
    repository = {
      findOneByCustomerNumberAndBillMonth: jest
        .fn()
        .mockResolvedValue(mockedEnergyBill),
      create: jest.fn().mockResolvedValue(mockedEnergyBill),
    } as any as EnergyBill.IRepository;

    httpClient = {
      get: jest.fn().mockResolvedValue({ data: mockedEnergyBillList }),
    } as any as IHttpClient;
    sut = new CreateEnergyBillList.UseCase(repository, httpClient);
  });

  it('should not create energy bill if the list already created', async () => {
    const result = await sut.execute();

    expect(result).toBeUndefined();
    expect(httpClient.get).toHaveBeenCalledWith('');
    expect(httpClient.get).toHaveBeenCalledTimes(1);
    expect(
      repository.findOneByCustomerNumberAndBillMonth,
    ).toHaveBeenCalledTimes(2);
    expect(repository.create).not.toHaveBeenCalled();
  });

  it('should create energy bill if any list item has not been created', async () => {
    jest
      .spyOn(repository, 'findOneByCustomerNumberAndBillMonth')
      .mockResolvedValueOnce(null);
    const result = await sut.execute();

    expect(result).toBeUndefined();
    expect(httpClient.get).toHaveBeenCalledWith('');
    expect(httpClient.get).toHaveBeenCalledTimes(1);
    expect(
      repository.findOneByCustomerNumberAndBillMonth,
    ).toHaveBeenCalledTimes(2);
    expect(repository.create).toHaveBeenCalledTimes(1);
  });

  it(`should not throw if httpClient.get throws`, async () => {
    jest.spyOn(httpClient, 'get').mockImplementationOnce(() => {
      throw new Error('');
    });
    const result = await sut.execute();

    expect(result).toBeUndefined();
  });

  it(`should not throw if repository.findOneByCustomerNumberAndBillMonth throws`, async () => {
    jest
      .spyOn(repository, 'findOneByCustomerNumberAndBillMonth')
      .mockImplementationOnce(() => {
        throw new Error('');
      });
    const result = await sut.execute();

    expect(result).toBeUndefined();
  });

  it(`should not throw if repository.create throws`, async () => {
    jest
      .spyOn(repository, 'findOneByCustomerNumberAndBillMonth')
      .mockResolvedValueOnce(null);
    jest.spyOn(repository, 'create').mockImplementationOnce(() => {
      throw new Error('');
    });
    const result = await sut.execute();

    expect(result).toBeUndefined();
  });
});
