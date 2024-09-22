import {Column, PrimaryKey, Model, BelongsToMany} from "sequelize-typescript";
import {AbacResourceAttributeModel} from "./AbacResourceAttribute.model";

export class AbacResourceModel extends Model {
  @PrimaryKey
  @Column
  declare id: string;

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

  @BelongsToMany(() => AbacResourceAttributeModel, () => AbacResourceModel, 'id', 'resourceId')
  declare attributes: AbacResourceAttributeModel[];

}
