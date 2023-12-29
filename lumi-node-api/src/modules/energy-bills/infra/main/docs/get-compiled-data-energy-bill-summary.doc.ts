import { ApiOperationOptions } from '@nestjs/swagger';

export const getCompiledDataEnergyBillSummary: ApiOperationOptions = {
  summary:
    'Buscar dados compilados de contas de energia elétrica por Nº de cliente',
  description:
    `O endpoint retorna os dados compilados de várias contas de energia elética de um cliente pelo seu
    número de registro. O retorno é do tipo "CompiledDataReturnedDTO" que está detalhado em Schemas.
    Haverá um erro 400 caso o "Nº de cliente" não for informado na requisição.`.trim(),
};
