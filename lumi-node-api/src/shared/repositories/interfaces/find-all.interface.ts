export interface IFindAll<E = unknown> {
  findAll(selectFields?: (keyof E)[]): Promise<E[] | Partial<E[]>>;
}
