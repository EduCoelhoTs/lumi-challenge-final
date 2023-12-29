import {
  mockedEnergyBill,
  mockedEnergyBillList,
} from '@energy-bills/domain/__tests__/mock';
import { DataSource, Repository } from 'typeorm';
import { EnergyBill } from '@energy-bills/domain';
import { EnergyBillEntity } from '@energy-bills/infra/data/entities';
import { EnergyBillRepository } from '@energy-bills/infra/data/repositories';

describe('EnergyBillRepository unit tests', () => {
  let mockedUserRepo: Repository<EnergyBillEntity>;
  let mockDataSource: DataSource;
  let sut: EnergyBill.IRepository;

  beforeEach(() => {
    mockedUserRepo = {
      create: jest.fn().mockReturnValue(mockedEnergyBill),
      save: jest.fn().mockResolvedValue(mockedEnergyBill),
      find: jest.fn().mockResolvedValue(mockedEnergyBillList),
      findOne: jest.fn().mockResolvedValue(mockedEnergyBill),
    } as any as Repository<EnergyBillEntity>;
    mockDataSource = {
      getRepository: jest.fn().mockReturnValue(mockedUserRepo),
    } as any as DataSource;
  });

  afterEach(() => {
    EnergyBillRepository.instance = null;
  });

  it(`the sut and mockDataSource should be defined`, () => {
    sut = EnergyBillRepository.createInstance(mockDataSource);

    expect(sut).toBeDefined();
    expect(mockDataSource).toBeDefined();
  });

  describe('createInstance', () => {
    it(`should create an instance correctly`, async () => {
      expect(EnergyBillRepository.instance).toBeNull();

      sut = EnergyBillRepository.createInstance(mockDataSource);

      expect(EnergyBillRepository.instance).toStrictEqual(sut);
      expect(EnergyBillRepository.instance).toBeInstanceOf(
        EnergyBillRepository,
      );
    });
  });

  describe('create', () => {
    it(`should create an energy bill correctly`, async () => {
      sut = EnergyBillRepository.createInstance(mockDataSource);
      const result = await sut.create(mockedEnergyBill);

      expect(result).toBeTruthy();
      expect(mockedUserRepo.create).toHaveBeenCalledWith(mockedEnergyBill);
      expect(mockedUserRepo.create).toHaveBeenCalledTimes(1);
      expect(mockedUserRepo.save).toHaveBeenCalledWith(mockedEnergyBill);
      expect(mockedUserRepo.save).toHaveBeenCalledTimes(1);
    });

    it(`should throw if userRepo.create throws`, async () => {
      sut = EnergyBillRepository.createInstance(mockDataSource);
      jest.spyOn(mockedUserRepo, 'create').mockImplementationOnce(() => {
        throw new Error('');
      });

      await expect(async () => sut.create(mockedEnergyBill)).rejects.toThrow();
    });

    it(`should throw if userRepo.save throws`, async () => {
      sut = EnergyBillRepository.createInstance(mockDataSource);
      jest.spyOn(mockedUserRepo, 'save').mockImplementationOnce(() => {
        throw new Error('');
      });

      await expect(async () => sut.create(mockedEnergyBill)).rejects.toThrow();
    });
  });

  describe('findAllByCustomerNumber', () => {
    const customerNumber = '4847565457';

    it(`should find energy bills list correctly by customer number`, async () => {
      sut = EnergyBillRepository.createInstance(mockDataSource);
      const result = await sut.findAllByCustomerNumber(customerNumber);

      expect(result).toStrictEqual(mockedEnergyBillList);
      expect(mockedUserRepo.find).toHaveBeenCalledTimes(1);
    });

    it(`should throw if userRepo.find throws`, async () => {
      sut = EnergyBillRepository.createInstance(mockDataSource);
      jest.spyOn(mockedUserRepo, 'find').mockImplementationOnce(() => {
        throw new Error('');
      });

      await expect(async () =>
        sut.findAllByCustomerNumber(customerNumber),
      ).rejects.toThrow();
    });
  });

  describe('findOneByCustomerNumberAndBillMonth', () => {
    const customerNumber = '4847565457';
    const billMonth = 'FEV/2023';

    it(`should find one energy bill correctly by customer number and bill month`, async () => {
      sut = EnergyBillRepository.createInstance(mockDataSource);
      const result = await sut.findOneByCustomerNumberAndBillMonth(
        customerNumber,
        billMonth,
      );

      expect(result).toStrictEqual(mockedEnergyBill);
      expect(mockedUserRepo.findOne).toHaveBeenCalledTimes(1);
    });

    it(`should throw if userRepo.findOne throws`, async () => {
      sut = EnergyBillRepository.createInstance(mockDataSource);
      jest.spyOn(mockedUserRepo, 'findOne').mockImplementationOnce(() => {
        throw new Error('');
      });

      await expect(async () =>
        sut.findOneByCustomerNumberAndBillMonth(customerNumber, billMonth),
      ).rejects.toThrow();
    });
  });

  describe('findAll', () => {
    it(`should find energy bills list correctly`, async () => {
      sut = EnergyBillRepository.createInstance(mockDataSource);
      const result = await sut.findAll();

      expect(result).toStrictEqual(mockedEnergyBillList);
      expect(mockedUserRepo.find).toHaveBeenCalledTimes(1);
    });

    it(`should throw if userRepo.find throws`, async () => {
      sut = EnergyBillRepository.createInstance(mockDataSource);
      jest.spyOn(mockedUserRepo, 'find').mockImplementationOnce(() => {
        throw new Error('');
      });

      await expect(async () => sut.findAll()).rejects.toThrow();
    });
  });

  describe('findOneByInstallationNumberAndBillMonth', () => {
    const installationNumber = '30008978444';
    const billMonth = 'FEV/2023';

    it(`should find one energy bill correctly by installation number and bill month`, async () => {
      sut = EnergyBillRepository.createInstance(mockDataSource);
      const result = await sut.findOneByInstallationNumberAndBillMonth(
        installationNumber,
        billMonth,
      );

      expect(result).toStrictEqual(mockedEnergyBill);
      expect(mockedUserRepo.findOne).toHaveBeenCalledTimes(1);
    });

    it(`should throw if userRepo.findOne throws`, async () => {
      sut = EnergyBillRepository.createInstance(mockDataSource);
      jest.spyOn(mockedUserRepo, 'findOne').mockImplementationOnce(() => {
        throw new Error('');
      });

      await expect(async () =>
        sut.findOneByInstallationNumberAndBillMonth(
          installationNumber,
          billMonth,
        ),
      ).rejects.toThrow();
    });
  });
});
