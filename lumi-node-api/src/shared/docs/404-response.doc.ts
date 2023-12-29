import { ApiResponseOptions } from '@nestjs/swagger';

export const response404: ApiResponseOptions = {
  status: 404,
  description: 'Not Found',
};
