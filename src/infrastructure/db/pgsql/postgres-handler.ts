import sequelize from "./database.config";

const isDev = process.env.NODE_ENV === 'development';

export class PostgresHandler implements DatabaseHandlerInterface {
  async init() {
    await sequelize.sync({ force: isDev });
  }
}