import {AutoIncrement, BelongsToMany, Column, Model, PrimaryKey, Table} from "sequelize-typescript";
import {AbacActionModel} from "./AbacAction.model";
import {AbacResourceAttributeModel} from "./AbacResourceAttribute.model";
import {AbacUserAttributeModel} from "./AbacUserAttribute.model";
import {AbacEntity} from "../../../../../domain/authorization/entity/abac/abac.entity";
import {AccessPolicyEntity} from "../../../../../domain/authorization/entity/abac/access-policy.entity";

@Table({
  tableName: "abac_access_policies",
  timestamps: true
})
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

  @BelongsToMany(() => AbacActionModel, () => AbacAccessPolicyModel, 'id', 'actionName')
  declare actions: AbacActionModel[];

  @BelongsToMany(() => AbacResourceAttributeModel, () => AbacAccessPolicyModel, 'id', 'resourceAttributeName')
  declare resourceAttributes: AbacResourceAttributeModel[];

  @BelongsToMany(() => AbacUserAttributeModel, () => AbacAccessPolicyModel, 'id', 'userAttributeName')
  declare userAttributes: AbacUserAttributeModel[];

  @Column({ allowNull: false, defaultValue: new Date() })
  declare createdAt: Date;

  @Column({ allowNull: true, defaultValue: new Date() })
  declare updatedAt: Date;

  static toEntity = (model: AbacAccessPolicyModel): AccessPolicyEntity => {
    return AccessPolicyEntity.from(model);
  }
}
