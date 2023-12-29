export interface ICreate<E = unknown> {
  create(data: E): Promise<E>;
}
