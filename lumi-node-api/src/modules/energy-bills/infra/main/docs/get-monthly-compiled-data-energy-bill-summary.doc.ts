import { ApiOperationOptions } from '@nestjs/swagger';

export const getMonthlyCompiledDataEnergyBillSummary: ApiOperationOptions = {
  summary:
    'Buscar dados compilados mensais de contas de energia elétrica por Nº de cliente',
  description:
    `O endpoint retorna uma lista de dados compilados de energia elética de um cliente pelo seu número de registro.
    Haverá um erro 400 caso o "Nº de cliente" não for informado na requisição.`.trim(),
};
