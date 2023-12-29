import { EnergyBill } from '@energy-bills/domain';
import { BadRequestError } from '@shared/errors';
import { CompiledData } from '@energy-bills/domain/dtos';
import { mockedEnergyBill } from '@energy-bills/domain/__tests__/mock';

describe('EnergyBill integration tests', () => {
  let data: EnergyBill.Interface;
  let repository: EnergyBill.IRepository;

  beforeEach(() => {
    data = { ...mockedEnergyBill };
    repository = {
      create: jest.fn().mockResolvedValue(data),
    } as any as EnergyBill.IRepository;
  });

  describe('EnergyBill.create', () => {
    it('should create an energy bill', async () => {
      const result = await EnergyBill.create(data, repository);

      expect(result).toStrictEqual(data);
    });

    it('should throw a BadRequestError when the given id is not provided', async () => {
      expect(() =>
        EnergyBill.create({ ...data, id: null }, repository),
      ).toThrow(new BadRequestError(`id is required`));
    });

    it('should throw a BadRequestError when the given createdBy is invalid', async () => {
      expect(() =>
        EnergyBill.create(
          { ...data, createdBy: '59d4c26f-048-4772-ac03-2171ffee62e1' },
          repository,
        ),
      ).toThrow(new BadRequestError(`createdBy in invalid format`));
    });

    it('should not throw an error when the given updatedBy is provided correctly', async () => {
      expect(() =>
        EnergyBill.create(
          { ...data, updatedBy: '59d4c26f-048-4772-ac03-2171ffee62e1' },
          repository,
        ),
      ).toThrow(new BadRequestError(`updatedBy in invalid format`));
    });
  });

  describe('EnergyBill.calculateCompiledData', () => {
    it('should calculate correctly', () => {
      const result = EnergyBill.calculateCompiledData(data);

      expect(result).toStrictEqual({
        electricPowerConsumption: 19,
        compensatedEnergyKWh: 8,
        totalValueWithoutGD: 29,
        GDEconomy: 20,
      } as CompiledData);
    });
  });
});
