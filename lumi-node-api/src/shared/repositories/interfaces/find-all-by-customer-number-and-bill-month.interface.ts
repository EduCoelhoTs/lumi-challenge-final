export interface IFindOneByCustomerNumberAndBillMonth<E = unknown> {
  findOneByCustomerNumberAndBillMonth(
    customerNumber: string,
    billMonth: string,
    selectFields?: (keyof E)[],
  ): Promise<E | Partial<E>>;
}
