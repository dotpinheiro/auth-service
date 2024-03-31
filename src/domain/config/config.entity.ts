
type SessionValidationTypes = "jwt" | "paseto"
type AvailableDatabases = "postgres" | "mysql"

export class ConfigEntity {
  private _sessionValidationType: SessionValidationTypes = "jwt";
  private _database: AvailableDatabases = "postgres";
  private _port: number = 3000;
  private _host: string = "localhost";

  public get sessionValidationType(): SessionValidationTypes {
    return this._sessionValidationType;
  }

  public set sessionValidationType(value: SessionValidationTypes) {
    this._sessionValidationType = value;
  }

  public get database(): AvailableDatabases {
    return this._database;
  }

  public set database(value: AvailableDatabases) {
    this._database = value;
  }

  public get port(): number {
    return this._port;
  }

  public get host(): string {
    return this._host;
  }

}
