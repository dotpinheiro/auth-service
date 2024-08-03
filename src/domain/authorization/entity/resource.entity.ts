import {ActionEntity} from "./action.entity";

export class ResourceEntity {
  private _id: string;
  private _name: string;
  private _description: string;
  private _actions: ActionEntity[];
  private _attributes: string[];

  constructor(data: Partial<ResourceEntity>) {
    this._id = data.id;
    this._name = data.name;
    this._description = data.description;
    this._actions = data.actions;
    this._attributes = data.attributes;
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

  public get actions(): ActionEntity[] {
    return this._actions;
  }

  public get attributes(): string[] {
    return this._attributes;
  }
}
