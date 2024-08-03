import UserModel from "./models/User.model";
import sequelize from "./database.config";

const isDev = process.env.NODE_ENV === 'development';

export const initDb = async () => {
  await sequelize.sync({ force: isDev });
}
