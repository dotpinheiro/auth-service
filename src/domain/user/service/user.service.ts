import {UserRepository} from "../../../infrastructure/user/user.repository";
import {UserEntity} from "../entity/user.entity";
import {AuthorizationRepository} from "../../../infrastructure/authorization/authorization.repository";


export class UserService {
    private _userRepository: UserRepository;
    private _authorizationRepository: AuthorizationRepository;

    constructor(
      userRepository = new UserRepository(),
      _authorizationRepository = new AuthorizationRepository(),
      ) {
        this._userRepository = userRepository;
    }

    async createUser(user: UserEntity): Promise<UserEntity> {
        await this._userRepository.create(user);
        return user;
    }

    async findUserWithPermissions(uuid: string): Promise<UserEntity> {
        const user = await this._userRepository.findOneByUuid(uuid);
        user.permissions = await this._authorizationRepository.findPermissionsByUserUuid(uuid);
        return user;
    }

    async findUserByEmail(email: string): Promise<UserEntity> {
        return this._userRepository.findByEmailOrFail(email);
    }

    async findUserByUsername(username: string): Promise<UserEntity> {
        return this._userRepository.findByUsernameOrFail(username);
    }

}
