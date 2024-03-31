import {BaseEntity} from "../@shared/entity/base.entity";


export class UserEntity extends BaseEntity {
  private _uuid: string;
  private _name: string;
  private _username: string;
  private _email: string;
  private _password: string;

  constructor() {
    super();
  }

  public checkPassword(password: string): boolean {
    return this._password === password;
  }

  public get uuid(): string {
    return this._uuid;
  }

  public set uuid(value: string) {
    this._uuid = value;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get username(): string {
    return this._username;
  }

  public set username(value: string) {
    this._username = value;
  }

  public get email(): string {
    return this._email;
  }

  public set email(value: string) {
    this._email = value;
  }

  public get password(): string {
    return this._password;
  }

  public set password(value: string) {
    this._password = value;
  }

}
