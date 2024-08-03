export class ActionEntity {
  private _id: string;
  private _name: string;
  private _description: string;

  constructor(data: Partial<ActionEntity>) {
    this._id = data.id;
    this._name = data.name;
    this._description = data.description;
  }

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get description(): string {
    return this._description;
  }
}
