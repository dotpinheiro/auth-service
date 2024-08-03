import {BaseEntity} from "../../@shared/entity/base.entity";
import {compare, hash} from "bcryptjs";
import { randomUUID } from 'crypto';

export class UserEntity extends BaseEntity {
  private _uuid: string;
  private _name: string;
  private _username: string;
  private _email: string;
  private _password: string;

  public async create({ name = '', username = '', email = '', password = ''}) {
    this.uuid = randomUUID();
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
    await this.hashPassword();
    this.validate();
    return this;
  }

  public static from({ uuid, name, username, email, password }: any): UserEntity {
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
      throw new Error('Invalid email');
    }
    if(this.username.length < 4) {
      throw new Error('Username must be at least 4 characters');
    }
    if(this.password.length < 8) {
      throw new Error('Password must be at least 8 characters');
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

}
