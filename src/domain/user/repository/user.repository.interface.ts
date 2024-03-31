import {BaseRepositoryInterface} from "../../@shared/repository/base.repository.interface";
import {UserEntity} from "../entity/user.entity";

export interface UserRepositoryInterface extends BaseRepositoryInterface<UserEntity>{
  findByEmailOrFail: (email: string) => Promise<UserEntity>;
  findByUsernameOrFail: (username: string) => Promise<UserEntity>;
}
