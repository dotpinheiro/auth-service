import {UserEntity} from "../../user/entity/user.entity";

export class AuthenticationEntity {
  private readonly _user: UserEntity;

  constructor({ user }) {
    this._user = user;
  }

  get user(): UserEntity {
    return this._user;
  }

}
