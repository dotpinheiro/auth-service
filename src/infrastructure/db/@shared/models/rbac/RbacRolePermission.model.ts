import RbacRoleModel from "./RbacRole.model";
import {
  AutoIncrement,
  BelongsTo,
  BelongsToMany,
  Column,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table
} from "sequelize-typescript";
import RbacPermissionModel from "./RbacPermission.model";

@Table({
  tableName: "rbac_role_permissions",
  timestamps: true,
})
export default class RbacRolePermissionModel extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id: number;

  @ForeignKey(() => RbacRoleModel)
  @Column
  declare roleId: number;

  @ForeignKey(() => RbacPermissionModel)
  @Column
  declare permissionId: number;

  @Column({ allowNull: false, defaultValue: new Date() })
  declare createdAt: Date;

  @Column({ allowNull: false, defaultValue: new Date() })
  declare updatedAt: Date;

  @BelongsToMany(() => RbacPermissionModel, () => RbacRolePermissionModel, 'id', 'permissionId')
  declare permissions: RbacPermissionModel[];

}
