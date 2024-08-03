export interface BaseRepositoryInterface<T> {
  create: (entity: T) => Promise<T>;
  update: (entity: T) => Promise<T>;
  delete: (entity: T) => Promise<boolean>;
  findOne: (entity: T) => Promise<T>;
  findOneByUuid: (uuid: string) => Promise<T>;
  findAll: () => Promise<T[]>;
}
