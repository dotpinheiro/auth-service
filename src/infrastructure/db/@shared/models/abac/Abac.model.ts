import UserModel from "../User.model";
import {AutoIncrement, Column, ForeignKey, Model, PrimaryKey} from "sequelize-typescript";

export class AbacModel extends Model {
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

}
