import {
  Model,
  PrimaryKey,
  Column, Table
} from "sequelize-typescript";
import {UserEntity} from "../../../../domain/user/entity/user.entity";

@Table({
  tableName: "users",
  timestamps: true,
})
export default class UserModel extends Model {
  @PrimaryKey
  @Column
  declare uuid: string;

  @Column({ allowNull: false })
  declare name: string;

  @Column({ allowNull: false, unique: true })
  declare username: string;

  @Column({ allowNull: false, unique: true })
  declare email: string;

  @Column({ allowNull: false })
  declare password: string;

  @Column({ allowNull: false, defaultValue: true })
  declare isActive: boolean;

  static toEntity(user: UserModel): UserEntity {
    return UserEntity.from({
      uuid: user.uuid,
      name: user.name,
      username: user.username,
      email: user.email,
      password: user.password
    })
  }

}
