import { CompiledData } from '@energy-bills/domain/dtos';

export interface IGetCompiledDataService {
  execute(customerNumber: string): Promise<CompiledData>;
}
