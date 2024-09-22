import {AutoIncrement, BelongsToMany, Column, Model, PrimaryKey} from "sequelize-typescript";
import {AbacActionModel} from "./AbacAction.model";
import {AbacResourceAttributeModel} from "./AbacResourceAttribute.model";
import {AbacUserAttributeModel} from "./AbacUserAttribute.model";
import {AbacEntity} from "../../../../../domain/authorization/entity/abac/abac.entity";

export class AbacAccessPolicyModel extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id: number;

  @Column({ allowNull: false })
  declare userAttributeName: string;

  @Column({ allowNull: false })
  declare resourceAttributeName: string;

  @Column({ allowNull: false })
  declare actionName: string;

  @BelongsToMany(() => AbacActionModel, () => AbacAccessPolicyModel, 'name', 'actionName')
  declare actions: AbacActionModel[];

  @BelongsToMany(() => AbacResourceAttributeModel, () => AbacAccessPolicyModel, 'attributeName', 'resourceAttributeName')
  declare resourceAttributes: AbacResourceAttributeModel[];

  @BelongsToMany(() => AbacUserAttributeModel, () => AbacAccessPolicyModel, 'id', 'userAttributeName')
  declare userAttributes: AbacUserAttributeModel[];

  static toEntity = (model: AbacAccessPolicyModel[]): AbacEntity => {
    return AbacEntity.from(model);
  }
}
