import { ApiResponseOptions } from '@nestjs/swagger';

export const response401: ApiResponseOptions = {
  status: 401,
  description: 'Unauthorized',
};
