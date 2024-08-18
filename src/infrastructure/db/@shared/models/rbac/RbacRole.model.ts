import {
  BelongsToAssociation,
  BelongsToMany,
  Column,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table
} from "sequelize-typescript";
import RbacPermissionModel from "./RbacPermission.model";
import RbacModel from "./Rbac.model";
import RbacRolePermissionModel from "./RbacRolePermission.model";

@Table({
  tableName: "rbac_roles",
  timestamps: true,
})
export default class RbacRoleModel extends Model {
  @PrimaryKey
  @Column
  declare id: number;

  @ForeignKey(() => RbacModel)
  declare rbacId: number;

  @Column({ allowNull: false, unique: true })
  declare name: string;

  @Column({ allowNull: false })
  declare description: string;

  @Column({ allowNull: false })
  declare isActive: boolean;

  @Column({ allowNull: false })
  declare createdAt: Date;

  @Column({ allowNull: false })
  declare updatedAt: Date;

  @HasMany(() => RbacRolePermissionModel)
  declare permissions: RbacRolePermissionModel[];

}
