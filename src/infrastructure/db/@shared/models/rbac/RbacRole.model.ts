import {
  AutoIncrement,
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
import {RoleEntity} from "../../../../../domain/authorization/entity/rbac/role.entity";

@Table({
  tableName: "rbac_roles",
  timestamps: true,
})
export default class RbacRoleModel extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ allowNull: false, unique: true })
  declare id: number;

  @Column({ allowNull: false, unique: true })
  declare name: string;

  @Column({ allowNull: true })
  declare description: string;

  @Column({ allowNull: false, defaultValue: true })
  declare isActive: boolean;

  @Column({ allowNull: false, defaultValue: new Date() })
  declare createdAt: Date;

  @Column({ allowNull: false, defaultValue: new Date() })
  declare updatedAt: Date;

  @HasMany(() => RbacRolePermissionModel)
  declare rolesPermissions: RbacRolePermissionModel[];

  static toEntity = (model: RbacRoleModel): RoleEntity => {
    return RoleEntity.from(model);
  }

}
