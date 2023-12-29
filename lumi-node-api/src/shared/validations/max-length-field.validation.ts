import { Validation, RequiredFieldValidation } from '@shared/validations';
import { BadRequestError } from '@shared/errors';

export class MaxLengthFieldValidation<T = any> implements Validation<T> {
  constructor(
    private readonly fieldName: keyof T,
    private readonly maxLength: number,
    private readonly isRequired: boolean = true,
  ) {}

  public validate(input: T): void {
    if (this.isRequired) {
      this.isRequiredValidate(input);
    } else if (!input[this.fieldName as string]) {
      return;
    }

    const value = input[this.fieldName] as string;

    if (typeof value !== 'string') {
      throw new BadRequestError(`${this.fieldName as any} must be a string`);
    }

    if (value.length > this.maxLength) {
      throw new BadRequestError(
        `${this.fieldName as any} must contain a maximum of ${
          this.maxLength
        } characters`.trim(),
      );
    }
  }

  private isRequiredValidate(input: T): void {
    const isRequiredValidator = new RequiredFieldValidation<T>(this.fieldName);
    isRequiredValidator.validate(input);
  }
}
