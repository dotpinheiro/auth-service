import DatabaseConfig from '../database.config';
import { DataTypes, Model } from 'sequelize';

export class UserModel extends Model {
  public uuid!: string;
  public name!: string;
  public email!: string;
  public password!: string;
  public isActive: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

UserModel.init({
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  }
}, {
  timestamps: true,
  paranoid: true,
  sequelize: DatabaseConfig,
})
