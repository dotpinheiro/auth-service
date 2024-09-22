import {AutoIncrement, BelongsToMany, Column, Model, PrimaryKey, Table} from "sequelize-typescript";
import UserModel from "../User.model";
import {AbacAccessPolicyModel} from "./AbacAccessPolicy.model";
import RbacRoleModel from "../rbac/RbacRole.model";
import {AbacEntity} from "../../../../../domain/authorization/entity/abac/abac.entity";

@Table({
  tableName: "abac_users",
  timestamps: true
})
export class AbacModel extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id: number;

  @Column({ allowNull: false })
  declare userUuid: string;

  @Column({ allowNull: false })
  declare accessPolicyId: number;

  @BelongsToMany(() => AbacAccessPolicyModel, () => AbacModel, 'id', 'accessPolicyId')
  declare policies: AbacAccessPolicyModel[];

  @Column({ allowNull: false, defaultValue: new Date() })
  declare createdAt: Date;

  @Column({ allowNull: true, defaultValue: new Date() })
  declare updatedAt: Date;

  static toEntity = (model: AbacModel): AbacEntity => {
    return AbacEntity.from(model);
  }
}
