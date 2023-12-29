import { Column, Entity } from 'typeorm';
import { EnergyBill } from '@energy-bills/domain';
import { EntityTypeOrm } from '@shared/database/entities';

@Entity('energy-bills')
export class EnergyBillEntity
  extends EntityTypeOrm
  implements EnergyBill.Interface
{
  @Column({ nullable: false, name: 'customer_umber' })
  customerNumber: string;

  @Column({ nullable: false, name: 'installation_number' })
  installationNumber: string;

  @Column({ nullable: false, name: 'bill_month' })
  billMonth: string;

  @Column({ nullable: false, name: 'energy_quantity_KWh', type: 'float' })
  energyQuantityKWh: number;

  @Column({ nullable: false, name: 'energy_value', type: 'float' })
  energyValue: number;

  @Column({
    nullable: false,
    name: 'energy_SCEEE_without_ICMS_quantity_KWh',
    type: 'float',
  })
  energySCEEEWithoutICMSQuantityKWh: number;

  @Column({
    nullable: false,
    name: 'energy_SCEEE_without_ICMS_value',
    type: 'float',
  })
  energySCEEEWithoutICMSValue: number;

  @Column({
    nullable: false,
    name: 'compensated_energy_GD_I_quantity_KWh',
    type: 'float',
  })
  compensatedEnergyGDIQuantityKWh: number;

  @Column({
    nullable: false,
    name: 'compensated_energy_GD_I_value',
    type: 'float',
  })
  compensatedEnergyGDIValue: number;

  @Column({
    nullable: false,
    name: 'municipal_public_lighting_contribution',
    type: 'float',
  })
  municipalPublicLightingContribution: number;
}
