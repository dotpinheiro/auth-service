/**
 * @abstract Base entity class
 */
export abstract class BaseEntity {
  protected _createdAt: Date = new Date();
  protected _updatedAt: Date | null = null;
  protected _deletedAt: Date | null = null;
  protected _isActive: boolean = true;

  /* Date when the entity was created */
  get createdAt() {
    return this._createdAt;
  }

  /* Date when the entity was updated */
  get updatedAt() {
    return this._updatedAt;
  }

  /* Date when the entity was deleted */
  get deletedAt() {
    return this._deletedAt;
  }

  /* Entity status */
  get isActive() {
    return this._isActive;
  }

  set isActive(value: boolean) {
    this._isActive = value;
  }
}
