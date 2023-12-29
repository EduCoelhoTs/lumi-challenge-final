import { ApiResponseOptions } from '@nestjs/swagger';

export const response422: ApiResponseOptions = {
  status: 422,
  description: 'Unprocessable Entity',
};
