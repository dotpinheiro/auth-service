import {UserService} from "../../user/service/user.service";
import {AuthenticationEntity} from "../entity/authentication.entity";

/* Authentication service class */
export class AuthenticationService {
  private _userService: UserService;

  /* Constructor of Authentication service
  * @param userService - User service instance
  * */
  constructor(userService = new UserService()) {
    this._userService = userService;
  }

  /* Authenticate user method */
  public async authenticate(email: string, password: string): Promise<AuthenticationEntity> {
    const user = await this._userService.findUserByEmail(email);
    await user.checkPassword(password);
    return new AuthenticationEntity({
      user
    });
  }

}
