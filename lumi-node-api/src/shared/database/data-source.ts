import { DataSource, DataSourceOptions } from 'typeorm';
import { IEnvConfig, envConfigFactory } from '../env';

const envConfig: IEnvConfig = envConfigFactory();
export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: envConfig.getDbHost(),
  port: envConfig.getDBPort(),
  username: envConfig.getDbUserName(),
  password: envConfig.getDbPassword(),
  database: envConfig.getDbName(),
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/shared/database/migrations/*{.ts,.js}'],
  synchronize: false,
};

export const dataSource = new DataSource(dataSourceOptions);
