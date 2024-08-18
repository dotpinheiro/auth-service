import {Column, ForeignKey, Model, PrimaryKey, Table} from "sequelize-typescript";
import RbacRoleModel from "./RbacRole.model";

@Table({
  tableName: "rbac_permissions",
  timestamps: true,
})
export default class RbacPermissionModel extends Model {
  @PrimaryKey
  @Column
  declare id: number;

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

}
