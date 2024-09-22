import {Column, Model, PrimaryKey, Unique} from "sequelize-typescript";

export class AbacUserAttributeModel extends Model {
  @PrimaryKey
  @Unique
  @Column
  declare attributeName: string;

  @Column({ allowNull: true })
  declare description: string;

  @Column({ allowNull: false, defaultValue: true })
  declare isActive: boolean;

  @Column({ allowNull: false, defaultValue: new Date() })
  declare createdAt: Date;

  @Column({ allowNull: true, defaultValue: new Date() })
  declare updatedAt: Date;
}
