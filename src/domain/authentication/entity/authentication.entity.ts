import {UserEntity} from "../../user/entity/user.entity";
import jwt from 'jsonwebtoken';

/* Authentication entity constructor params */
interface AuthenticationEntityConstructor {
  user: UserEntity;
}
/* Session interface */
interface Session {
  token: string;
}

/* Authentication entity class */
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

  /* Authenticated user data */
  get user(): UserEntity {
    return this._user;
  }

  /* Session data */
  get session(): Session {
    return this._session;
  }

}
