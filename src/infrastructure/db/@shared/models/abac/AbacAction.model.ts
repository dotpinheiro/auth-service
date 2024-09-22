import {Column, Model, PrimaryKey, Table, Unique} from "sequelize-typescript";

@Table({
  tableName: "abac_actions",
  timestamps: true
})
export class AbacActionModel extends Model {
  @Unique
  @Column({ allowNull: false , primaryKey: true })
  declare name: string;

  @Column({ allowNull: true })
  declare description: string;

  @Column({ allowNull: false, defaultValue: new Date() })
  declare createdAt: Date;

  @Column({ allowNull: true, defaultValue: new Date() })
  declare updatedAt: Date;

}
