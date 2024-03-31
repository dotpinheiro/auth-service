import {UserService} from "../../user/service/user.service";
import {AuthenticationEntity} from "../entity/authentication.entity";

export class AuthenticationService {
  private _userService: UserService;

  constructor(userService = new UserService()) {
    this._userService = userService;
  }

  public async authenticate(email: string, password: string): Promise<AuthenticationEntity> {
    const user = await this._userService.findUserByEmail(email);
    await user.checkPassword(password);
    return new AuthenticationEntity({
      user
    });
  }

}
