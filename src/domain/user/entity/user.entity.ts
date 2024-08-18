import {BaseEntity} from "../../@shared/entity/base.entity";
import {compare, hash} from "bcryptjs";
import { randomUUID } from 'crypto';
import {AuthorizationEntity} from "../../authorization/entity/authorization.entity";

type BaseParams = {
  authorization?: AuthorizationEntity;
} & Partial<UserEntity>

export enum UserEntityErrors {
  INVALID_EMAIL = 'Invalid email',
  INVALID_USERNAME = 'Username must be at least 4 characters',
  INVALID_PASSWORD = 'Password must be at least 8 characters',
}

export class UserEntity extends BaseEntity {
  private _uuid: string;
  private _name: string;
  private _username: string;
  private _email: string;
  private _password: string;
  private _authorization: AuthorizationEntity;

  public async create({ name = '', username = '', email = '', password = ''}: BaseParams) {
    this.uuid = randomUUID();
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
    this.validate();
    await this.hashPassword();
    return this;
  }

  public static from({ uuid, name, username, email, password }: BaseParams): UserEntity {
    const user = new UserEntity();
    user.uuid = uuid;
    user.name = name;
    user.username = username;
    user.email = email;
    user.password = password;
    return user;
  }

  private validate(){
    if (!this.email.match(/@/)) {
      throw new Error(UserEntityErrors.INVALID_EMAIL);
    }
    if(this.username.length < 4) {
      throw new Error(UserEntityErrors.INVALID_USERNAME);
    }
    if(this.password.length < 8) {
      throw new Error(UserEntityErrors.INVALID_PASSWORD);
    }
  }

  public async checkPassword(password: string): Promise<boolean> {
    const valid = await compare(password, this._password)
    if(!valid){
      throw new Error('Invalid password');
    }
    return valid;
  }

  public async hashPassword(): Promise<void> {
    this._password = await hash(this._password, 10);
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

  public get authorization(): AuthorizationEntity {
    return this._authorization;
  }

  public set authorization(value: AuthorizationEntity) {
    this._authorization = value;
  }

}
