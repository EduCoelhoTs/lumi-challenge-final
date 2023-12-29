export interface IFindOneByInstallationNumberAndBillMonth<E = unknown> {
  findOneByInstallationNumberAndBillMonth(
    installationNumber: string,
    billMonth: string,
    selectFields?: (keyof E)[],
  ): Promise<E | Partial<E>>;
}
