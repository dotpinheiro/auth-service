import {ResourceEntity} from "../resource/resource.entity";
import {ActionEntity} from "../action/action.entity";

export class AccessPolicyEntity {
  private _id: string;
  private _name: string;
  private _description: string;
  private _resources: ResourceEntity[];
  private _actions: ActionEntity[];

  constructor(data: Partial<AccessPolicyEntity>) {
    this._id = data.id;
    this._name = data.name;
    this._description = data.description;
    this._resources = data.resources;
    this._actions = data.actions;
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

  public get resources(): ResourceEntity[] {
    return this._resources;
  }

  public get actions(): ActionEntity[] {
    return this._actions;
  }
}
