import { DataSource, Equal, Repository } from 'typeorm';
import { EnergyBill } from '@energy-bills/domain';
import { EnergyBillEntity } from '@energy-bills/infra/data/entities';

export class EnergyBillRepository
  implements EnergyBill.IRepository<EnergyBillEntity>
{
  public static instance: EnergyBillRepository | null = null;
  public energyBillRepo: Repository<EnergyBillEntity>;

  private constructor(protected readonly dataSource: DataSource) {
    this.energyBillRepo = dataSource.getRepository(EnergyBillEntity);
  }

  public static createInstance(dataSource: DataSource): EnergyBillRepository {
    if (!EnergyBillRepository.instance) {
      EnergyBillRepository.instance = new EnergyBillRepository(dataSource);
    }

    return this.instance;
  }

  public create(data: EnergyBill.Interface): Promise<EnergyBill.Interface> {
    const createdEnergyBill = this.energyBillRepo.create(data);

    return this.energyBillRepo.save(createdEnergyBill);
  }

  public findAllByCustomerNumber(
    customerNumber: string,
    selectFields: (keyof EnergyBillEntity)[] = [],
  ): Promise<EnergyBill.Interface[]> {
    return this.energyBillRepo.find({
      select: selectFields,
      where: {
        customerNumber: Equal(customerNumber),
      },
    });
  }

  public findOneByCustomerNumberAndBillMonth(
    customerNumber: string,
    billMonth: string,
    selectFields: (keyof EnergyBillEntity)[] = [],
  ): Promise<EnergyBillEntity | Partial<EnergyBillEntity>> {
    return this.energyBillRepo.findOne({
      select: selectFields,
      where: {
        customerNumber: Equal(customerNumber),
        billMonth: Equal(billMonth),
      },
    });
  }

  public findAll(
    selectFields: (keyof EnergyBillEntity)[] = [],
  ): Promise<EnergyBillEntity[] | Partial<EnergyBillEntity[]>> {
    return this.energyBillRepo.find({
      select: selectFields,
    });
  }

  public findOneByInstallationNumberAndBillMonth(
    installationNumber: string,
    billMonth: string,
    selectFields?: (keyof EnergyBillEntity)[],
  ): Promise<EnergyBillEntity | Partial<EnergyBillEntity>> {
    return this.energyBillRepo.findOne({
      select: selectFields,
      where: {
        installationNumber: Equal(installationNumber),
        billMonth: Equal(billMonth),
      },
    });
  }
}
