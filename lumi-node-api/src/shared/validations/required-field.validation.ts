import { Validation } from '@shared/validations';
import { BadRequestError } from '@shared/errors';

export class RequiredFieldValidation<T = any> implements Validation<T> {
  constructor(private readonly fieldName: keyof T) {}

  public validate(input: T): void {
    if (!input[this.fieldName]) {
      throw new BadRequestError(`${this.fieldName as any} is required`);
    }
  }
}
