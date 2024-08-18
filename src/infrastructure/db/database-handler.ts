import {Sequelize} from "sequelize-typescript";
import {sequelizeSQLite} from "./sqlite/database.config";
import {sequelizePostgres} from "./pgsql/database.config";

export enum DatabaseHandlers {
  SQLITE = 'sqlite',
  POSTGRES = 'postgres',
}

export class DatabaseHandler {
  private _handler: Sequelize;

  constructor(handler = DatabaseHandlers.SQLITE) {
    switch (handler) {
      case DatabaseHandlers.SQLITE:
        this._handler = sequelizeSQLite
        break;
      case DatabaseHandlers.POSTGRES:
        this._handler = sequelizePostgres
        break;
      default:
        throw new Error('Invalid database handler');
    }
    console.log(`Database: ${handler} selected.`)
  }

  get handler(){
    return this._handler;
  }
}

export default DatabaseHandler;
