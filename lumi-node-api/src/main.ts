import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { swaggerConfig } from '@shared/docs';
import { dataSource } from '@shared/database';
import { envConfigFactory } from '@shared/env';
import { globalExeptionFiltersFactory } from '@shared/exception-filters';
import { corsConfig } from '@shared/cors';
import { createEnergyBillListUsecaseFactory } from '@energy-bills/application/factories/create-energy-bill-list.usecase.factory';

const envConfig = envConfigFactory();

async function bootstrap() {
  await dataSource
    .initialize()
    .then(async () => {
      console.log('Connection initialized with database...');
    })
    .catch((error) => console.log(error));

  const app = await NestFactory.create(AppModule);
  corsConfig(app);
  globalExeptionFiltersFactory(app);
  swaggerConfig(app);

  await app.listen(envConfig.getAppPort() || 3000);

  const createEnergyBillListUsecase = createEnergyBillListUsecaseFactory();
  createEnergyBillListUsecase.execute();
}
bootstrap();
