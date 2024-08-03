import {
  Model,
  PrimaryKey,
  Column, Table
} from "sequelize-typescript";

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

  @Column({ allowNull: false })
  declare username: string;

  @Column({ allowNull: false })
  declare email: string;

  @Column({ allowNull: false })
  declare password: string;

  @Column({ allowNull: false, defaultValue: true })
  declare isActive: boolean;

}
