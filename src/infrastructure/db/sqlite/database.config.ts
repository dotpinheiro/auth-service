import { Sequelize } from "sequelize-typescript";
import {sharedModels} from "../@shared";
import {DatabaseInterface} from "../database.interface";

export class Sqlite implements DatabaseInterface {
  private static instance: Sequelize;

  static getInstance(): Sequelize {
    if (!Sqlite.instance) {
      Sqlite.instance = new Sequelize({
        dialect: 'sqlite',
        storage: process.env.SQLITE_DB_PATH || ':memory:',
        logging: process.env.NODE_ENV !== 'testing',
      });

      Sqlite.instance.addModels([
        ...sharedModels
      ])
    }

    return Sqlite.instance;
  }

  init() {
    return Sqlite.getInstance();
  }
}
