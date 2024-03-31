export class BaseEntity {
  protected _createdAt: Date = new Date();
  protected _updatedAt: Date | null = null;
  protected _deletedAt: Date | null = null;
  protected _isActive: boolean = true;

  get createdAt() {
    return this._createdAt;
  }

  get updatedAt() {
    return this._updatedAt;
  }

  get deletedAt() {
    return this._deletedAt;
  }

  get isActive() {
    return this._isActive;
  }

  set isActive(value: boolean) {
    this._isActive = value;
  }
}
