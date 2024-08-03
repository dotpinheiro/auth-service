import {UserRepository} from "../../../infrastructure/user/user.repository";
import {UserEntity} from "../entity/user.entity";


export class UserService {
    private _userRepository: UserRepository;

    constructor(userRepository = new UserRepository()) {
        this._userRepository = userRepository;
    }

    async createUser(user: UserEntity): Promise<UserEntity> {
        await this._userRepository.create(user);
        return user;
    }

    async findUserByEmail(email: string): Promise<UserEntity> {
        return this._userRepository.findByEmailOrFail(email);
    }

    async findUserByUsername(username: string): Promise<UserEntity> {
        return this._userRepository.findByUsernameOrFail(username);
    }
}
