import {Postgres} from "./pgsql/database.config";
import {Sqlite} from "./sqlite/database.config";
import {DatabaseInterface} from "./database.interface";

export enum DatabaseHandlers {
  SQLITE = 'sqlite',
  POSTGRES = 'postgres',
}

export class DatabaseHandler {
  private readonly _handler: DatabaseInterface;

  constructor(handler = DatabaseHandlers.SQLITE) {
    const handlerMapping = {
      [DatabaseHandlers.SQLITE]: new Sqlite,
      [DatabaseHandlers.POSTGRES]: new Postgres,
    }
    this._handler = handlerMapping[handler];
    if(!this._handler) throw new Error(`Database handler ${handler} not found.`)
    console.log(`Database: ${handler} selected.`)
  }

  get handler(){
    return this._handler.init();
  }
}

export default DatabaseHandler;
