import { INestApplication } from '@nestjs/common';

import {
  BadRequestErrorFilter,
  ConflictErrorFilter,
  InternalServerErrorFilter,
  NotFoundErrorFilter,
  UnprocessableEntityErrorFilter,
} from '@shared/exception-filters';

export const globalExeptionFiltersFactory = (app: INestApplication): void => {
  app.useGlobalFilters(
    new ConflictErrorFilter(),
    new NotFoundErrorFilter(),
    new BadRequestErrorFilter(),
    new UnprocessableEntityErrorFilter(),
    new InternalServerErrorFilter(),
  );
};
