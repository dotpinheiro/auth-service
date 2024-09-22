import {Column, Model, PrimaryKey, Table, Unique} from "sequelize-typescript";

@Table({
  tableName: "abac_resource_attributes",
  timestamps: true
})
export class AbacResourceAttributeModel extends Model {
  @Unique
  @Column({ allowNull: false , primaryKey: true })
  declare name: string;

  @Column({ allowNull: false })
  declare resourceId: number;

  @Column({ allowNull: true })
  declare description: string;

  @Column({ allowNull: false, defaultValue: true })
  declare isActive: boolean;

  @Column({ allowNull: false, defaultValue: new Date() })
  declare createdAt: Date;

  @Column({ allowNull: true, defaultValue: new Date() })
  declare updatedAt: Date;
}
