import {
  Column,
  PrimaryKey,
  Model,
  Table,
  ForeignKey,
  AutoIncrement, BelongsToMany
} from "sequelize-typescript";
import UserModel from "../User.model";
import RbacRoleModel from "./RbacRole.model";
import {RbacEntity} from "../../../../../domain/authorization/entity/rbac/rbac.entity";

@Table({
  tableName: "rbac_users",
  timestamps: true,
})
export default class RbacModel extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id: number;

  @Column({ allowNull: false })
  declare name: string;

  @Column({ allowNull: true })
  declare description: string;

  @Column({ allowNull: false, defaultValue: true })
  declare isActive: boolean;

  @Column({ allowNull: false, defaultValue: new Date() })
  declare createdAt: Date;

  @Column({ allowNull: true, defaultValue: new Date() })
  declare updatedAt: Date;

  @ForeignKey(() => UserModel)
  @Column({ allowNull: false })
  declare userUuid: string;

  @ForeignKey(() => RbacRoleModel)
  @Column({ allowNull: false })
  declare rbacRoleId: number;

  @BelongsToMany(() => RbacRoleModel, () => RbacModel, 'id', 'rbacRoleId')
  declare roles: RbacRoleModel[];

  static toEntity(rbac: RbacModel): RbacEntity {
    return RbacEntity.from(rbac)
  }
}
