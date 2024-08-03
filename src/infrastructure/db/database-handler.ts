import {SQLiteHandler} from "./sqlite/sqlite-handler";
import {PostgresHandler} from "./pgsql/postgres-handler";

export enum DatabaseHandlers {
  SQLITE = 'sqlite',
  POSTGRES = 'postgres',
}

export class DatabaseHandler {
  private _handler: DatabaseHandlerInterface;
  constructor(handler = DatabaseHandlers.SQLITE) {
    switch (handler) {
      case DatabaseHandlers.SQLITE:
        this._handler = new SQLiteHandler();
        break;
      case DatabaseHandlers.POSTGRES:
        this._handler = new PostgresHandler();
        break;
      default:
        throw new Error('Invalid database handler');
    }
  }

  async init() {
    await this._handler.init();
  }
}
