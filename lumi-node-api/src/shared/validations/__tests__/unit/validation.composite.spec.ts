import {
  RequiredFieldValidation,
  UUIDValidation,
  Validation,
  ValidationComposite,
} from '@shared/validations';
import { randomUUID } from 'node:crypto';

interface IStubData {
  id: string;
  name: string;
}

describe('ValidationComposite unit tests', () => {
  let sut: Validation;

  const validation1 = new UUIDValidation('id');
  const validation2 = new RequiredFieldValidation('name');
  const dataValidate: IStubData = {
    id: randomUUID(),
    name: 'teste_name',
  };

  jest.spyOn(validation1, 'validate').mockReturnValue(null);
  jest.spyOn(validation2, 'validate').mockReturnValue(null);

  beforeEach(() => {
    sut = new ValidationComposite<IStubData>([validation1, validation2]);
  });

  it('the sut, validation1, validation2 and validation3 should be defined', () => {
    expect(sut).toBeDefined();
    expect(validation1).toBeDefined();
    expect(validation2).toBeDefined();
  });

  it('should vailidate correctly', () => {
    expect(() => sut.validate(dataValidate)).not.toThrow();
  });

  it('should throw an exeption if validation1 throws', async () => {
    jest.spyOn(validation1, 'validate').mockImplementationOnce(() => {
      throw new Error('validation1');
    });
    expect(() => sut.validate(dataValidate)).toThrow(new Error('validation1'));
  });

  it('should throw an exeption if validation2 throws', async () => {
    jest.spyOn(validation2, 'validate').mockImplementationOnce(() => {
      throw new Error('validation2');
    });
    expect(() => sut.validate(dataValidate)).toThrow(new Error('validation2'));
  });
});
