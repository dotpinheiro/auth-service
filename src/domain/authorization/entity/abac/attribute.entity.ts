import {
  AbacResourceAttributeModel
} from "../../../../infrastructure/db/@shared/models/abac/AbacResourceAttribute.model";
import {AbacUserAttributeModel} from "../../../../infrastructure/db/@shared/models/abac/AbacUserAttribute.model";


export class AttributeEntity {
  private _name: string;
  private _value: string;

  constructor(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get value() {
    return this._value;
  }

  static from(model: AbacResourceAttributeModel | AbacUserAttributeModel): AttributeEntity {
    return new AttributeEntity(model.name);
  }
}
