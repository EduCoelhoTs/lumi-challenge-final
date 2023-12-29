import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateEnergyBillsTable1703697737103 implements MigrationInterface {
  name = 'CreateEnergyBillsTable1703697737103';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "energy-bills" ("id" uuid NOT NULL, "deleted_at" TIMESTAMP, "created_at" TIMESTAMP DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "created_by" character varying, "updated_by" character varying, "deleted_by" character varying, "status" character varying, "customer_umber" character varying NOT NULL, "installation_number" character varying NOT NULL, "bill_month" character varying NOT NULL, "energy_quantity_KWh" double precision NOT NULL, "energy_value" double precision NOT NULL, "energy_SCEEE_without_ICMS_quantity_KWh" double precision NOT NULL, "energy_SCEEE_without_ICMS_value" double precision NOT NULL, "compensated_energy_GD_I_quantity_KWh" double precision NOT NULL, "compensated_energy_GD_I_value" double precision NOT NULL, "municipal_public_lighting_contribution" double precision NOT NULL, CONSTRAINT "PK_12083c166f1c441d1702668819b" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "energy-bills"`);
  }
}
