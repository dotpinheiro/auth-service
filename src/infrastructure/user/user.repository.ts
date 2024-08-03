import {UserRepositoryInterface} from "../../domain/user/repository/user.repository.interface";
import {UserEntity} from "../../domain/user/entity/user.entity";
import UserModel from "../db/sqlite/models/User.model";

export class UserRepository implements UserRepositoryInterface{
  create(entity: UserEntity) {
    return UserModel.create({
      uuid: entity.uuid,
      name: entity.name,
      username: entity.username,
      email: entity.email,
      password: entity.password
    })
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

  async findByEmailOrFail(email: string): Promise<UserEntity> {
    try{
      const user = await UserModel.findOne({ where: { email }, rejectOnEmpty: true });
      return UserEntity.from({
        uuid: user.uuid,
        name: user.name,
        username: user.username,
        email: user.email,
        password: user.password
      })
    }catch{
      throw new Error('User not found');
    }
  }

  findByUsernameOrFail(username: string): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }

  update(entity: UserEntity): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }

}
