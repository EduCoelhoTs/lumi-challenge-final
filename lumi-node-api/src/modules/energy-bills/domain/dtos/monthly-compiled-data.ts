import { CompiledData } from '@energy-bills/domain/dtos';

export interface MonthlyCompiledData extends CompiledData {
  billMonth: string;
}
