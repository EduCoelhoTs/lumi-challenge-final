export interface IFindAllByCustomerNumber<E = unknown> {
  findAllByCustomerNumber(
    customerNumber: string,
    selectFields?: (keyof E)[],
  ): Promise<E[]>;
}
