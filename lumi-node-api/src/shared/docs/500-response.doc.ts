import { ApiResponseOptions } from '@nestjs/swagger';

export const response500: ApiResponseOptions = {
  status: 500,
  description: 'Internal server error',
};
