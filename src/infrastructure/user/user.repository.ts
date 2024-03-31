import {UserRepositoryInterface} from "../../domain/user/repository/user.repository.interface";
import {UserEntity} from "../../domain/user/entity/user.entity";

export class UserRepository implements UserRepositoryInterface{
  create(entity: UserEntity): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }

  delete(entity: UserEntity): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  findAll(): Promise<UserEntity[]> {
    throw new Error('Method not implemented.');
  }

  findOne(entity: UserEntity): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }

  findByEmailOrFail(email: string): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }

  findByUsernameOrFail(username: string): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }

  update(entity: UserEntity): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }

}
