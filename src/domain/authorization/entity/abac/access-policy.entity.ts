import {ActionEntity} from "./action.entity";
import {AttributeEntity} from "./attribute.entity";
import {AbacAccessPolicyModel} from "../../../../infrastructure/db/@shared/models/abac/AbacAccessPolicy.model";

export class AccessPolicyEntity {
  private _actions: Array<ActionEntity>;
  private _userAttributes: Array<AttributeEntity>;
  private _resourceAttributes: Array<AttributeEntity>;

  constructor(actions: Array<ActionEntity>, userAttributes: Array<AttributeEntity>, resourceAttributes: Array<AttributeEntity>) {
    this._actions = actions;
    this._userAttributes = userAttributes;
    this._resourceAttributes = resourceAttributes;
  }

  get actions() {
    return this._actions;
  }

  get userAttributes() {
    return this._userAttributes;
  }

  get resourceAttributes() {
    return this._resourceAttributes;
  }

  checkPolicy(userAttribute: string, resourceAttribute: string, action: string) {
    return this._actions.some(actionEntity => actionEntity.name === action) &&
      this._userAttributes.some(attributeEntity => attributeEntity.name === userAttribute) &&
      this._resourceAttributes.some(attributeEntity => attributeEntity.name === resourceAttribute);
  }

  static from(model: AbacAccessPolicyModel): AccessPolicyEntity {
    return new AccessPolicyEntity(
      model.actions.map(action => ActionEntity.from(action)),
      model.userAttributes.map(attribute => AttributeEntity.from(attribute)),
      model.resourceAttributes.map(attribute => AttributeEntity.from(attribute))
    );
  }

}
