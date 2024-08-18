import {Column, PrimaryKey, BelongsToMany, Model, Table, HasMany, HasOne, ForeignKey} from "sequelize-typescript";
import UserModel from "../User.model";
import RbacRoleModel from "./RbacRole.model";
import {RbacEntity} from "../../../../../domain/authorization/entity/rbac/rbac.entity";

@Table({
  tableName: "rbac_users",
  timestamps: true,
})
export default class RbacModel extends Model {
  @PrimaryKey
  @Column
  declare id: number;

  @Column({ allowNull: false })
  declare name: string;

  @Column({ allowNull: true })
  declare description: string;

  @Column({ allowNull: false })
  declare isActive: boolean;

  @Column({ allowNull: false })
  declare createdAt: Date;

  @Column({ allowNull: true })
  declare updatedAt: Date;

  @ForeignKey(() => UserModel)
  @Column({ allowNull: false })
  declare userUuid: string;

  @HasMany(() => RbacRoleModel)
  declare roles: RbacRoleModel[];


  static toEntity(rbac: RbacModel): RbacEntity {
    return RbacEntity.from(rbac)
  }
}
