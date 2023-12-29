import { ApiOperationOptions } from '@nestjs/swagger';

export const createEnergyBillSummary: ApiOperationOptions = {
  summary: 'Criar registro de conta de energia elétrica.',
  description:
    `O endpoint cria um registro de conta de energia elétrica. Haverá um erro 400 caso haja
    algum campo obrigatório não informado.`.trim(),
};
