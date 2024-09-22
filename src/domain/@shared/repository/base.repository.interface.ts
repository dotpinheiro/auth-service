export interface BaseRepositoryInterface<T> {
  /* Persist an entity on database */
  create: (entity: T) => Promise<T>;
  /* Update an entity on database */
  update: (entity: T) => Promise<T>;
  /* Delete an entity on database */
  delete: (entity: T) => Promise<boolean>;
  /* Find an entity on database */
  findOne: (entity: T) => Promise<T>;
  /* Find an entity by uuid on database */
  findOneByUuid: (uuid: string) => Promise<T>;
  /* Find all entities on database */
  findAll: () => Promise<T[]>;
}
