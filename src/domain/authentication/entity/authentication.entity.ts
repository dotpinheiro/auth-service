import {UserEntity} from "../../user/entity/user.entity";
import jwt from 'jsonwebtoken';

interface AuthenticationEntityConstructor {
  user: UserEntity;
}

interface Session {
  token: string;
}

export class AuthenticationEntity {
  private readonly _user: UserEntity;
  private readonly _session: Session;

  constructor({ user }: AuthenticationEntityConstructor) {
    this._user = user;
    const token = jwt.sign({ id: user.uuid }, process.env.JWT_SECRET, { expiresIn: '1h' });
    this._session = {
      token
    }
  }

  get user(): UserEntity {
    return this._user;
  }

  get session(): Session {
    return this._session;
  }

}
