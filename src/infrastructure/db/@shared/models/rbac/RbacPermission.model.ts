import {AutoIncrement, Column, Model, PrimaryKey, Table} from "sequelize-typescript";
import {PermissionEntity} from "../../../../../domain/authorization/entity/rbac/permission.entity";

@Table({
  tableName: "rbac_permissions",
  timestamps: true,
})
export default class RbacPermissionModel extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
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

  static toEntity(permission: RbacPermissionModel): PermissionEntity {
    return PermissionEntity.from(permission);
  }

}
