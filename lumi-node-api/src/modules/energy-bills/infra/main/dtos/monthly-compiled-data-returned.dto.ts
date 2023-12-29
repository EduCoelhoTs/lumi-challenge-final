import { CompiledDataReturnedDTO } from '@energy-bills/infra/main/dtos';

export class MonthlyCompiledDataReturnedDTO extends CompiledDataReturnedDTO {
  billMonth: string;
}
