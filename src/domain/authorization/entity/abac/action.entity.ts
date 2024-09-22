import {AbacActionModel} from "../../../../infrastructure/db/@shared/models/abac/AbacAction.model";

export class ActionEntity {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  static from(model: AbacActionModel): ActionEntity {
    return new ActionEntity(model.name);
  }
}
