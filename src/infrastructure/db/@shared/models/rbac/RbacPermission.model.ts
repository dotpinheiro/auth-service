import {AutoIncrement, Column, ForeignKey, Model, PrimaryKey, Table} from "sequelize-typescript";
import RbacRoleModel from "./RbacRole.model";

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

}
