import { ApiOperationOptions } from '@nestjs/swagger';

export const getAllEnergyBillsSummary: ApiOperationOptions = {
  summary: 'Buscar contas de energia elétrica',
  description:
    `O endpoint retorna uma lista de contas de energia elética; e nele é possível especificar quais campos 
    deseja que seja retornado na resposta da requisição.`.trim(),
};
