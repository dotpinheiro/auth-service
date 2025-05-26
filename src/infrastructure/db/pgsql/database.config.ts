import { Sequelize } from "sequelize-typescript";
import {sharedModels} from "../@shared";
import {DatabaseInterface} from "../database.interface";

export class Postgres implements DatabaseInterface {
  private static instance: Sequelize;

  static getInstance(): Sequelize {
    if (!Postgres.instance) {
      Postgres.instance = new Sequelize({
        dialect: 'postgres',
        host: process.env.POSTGRES_DB_HOST,
        username: process.env.POSTGRES_DB_USER,
        password: process.env.POSTGRES_DB_PASSWORD,
        database: process.env.POSTGRES_DB_NAME,
        port: process.env.POSTGRES_DB_PORT ? parseInt(process.env.POSTGRES_DB_PORT) : 5432,
        ssl: false,
      });

      Postgres.instance.addModels([
        ...sharedModels
      ])
    }

    return Postgres.instance;
  }

  init() {
    return Postgres.getInstance();
  }
}
