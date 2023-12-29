import { ApiResponseOptions } from '@nestjs/swagger';

export const response400: ApiResponseOptions = {
  status: 400,
  description: 'Bad Request',
};
