import {Column, Model, PrimaryKey, Unique} from "sequelize-typescript";


export class AbacActionModel extends Model {
  @PrimaryKey
  @Unique
  @Column({ allowNull: false })
  declare name: string;

  @Column({ allowNull: true })
  declare description: string;

  @Column({ allowNull: false, defaultValue: new Date() })
  declare createdAt: Date;

  @Column({ allowNull: true, defaultValue: new Date() })
  declare updatedAt: Date;

}
