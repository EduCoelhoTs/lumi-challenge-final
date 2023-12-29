import { Module } from '@nestjs/common';
import { EnergyBillsController } from '@energy-bills/infra/main';

@Module({
  // imports: [EnergyBillsModule],
  controllers: [EnergyBillsController],
})
export class AppModule {}
