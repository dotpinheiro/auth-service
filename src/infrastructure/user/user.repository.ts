import {UserRepositoryInterface} from "../../domain/user/repository/user.repository.interface";
import {UserEntity} from "../../domain/user/entity/user.entity";
import UserModel from "../db/@shared/models/User.model";

export class UserRepository implements UserRepositoryInterface{
  async create(entity: UserEntity): Promise<UserEntity> {
    const user = await UserModel.findOne({ where: { email: entity.email }, rejectOnEmpty: false });
    if(user) throw new Error('User already exists');
    try{
      await UserModel.create({
        uuid: entity.uuid,
        name: entity.name,
        username: entity.username,
        email: entity.email,
        password: entity.password
      })
      return entity;
    }catch{
      throw new Error('User creation failed');
    }
  }

  async delete(entity: UserEntity): Promise<boolean> {
    const affectedRows = await UserModel.destroy({ where: { uuid: entity.uuid } });
    return affectedRows > 0;
  }

  findAll(): Promise<UserEntity[]> {
    return UserModel.findAll().then(users => users.map(UserModel.toEntity));
  }

  async findOne(entity: UserEntity): Promise<UserEntity> {
    try{
      const user = await UserModel.findOne({ where: { uuid: entity.uuid }, rejectOnEmpty: true });
      return UserModel.toEntity(user);
    }catch{
      throw new Error('User not found');
    }
  }

  async findOneByUuid(uuid: string): Promise<UserEntity> {
    try{
      const user = await UserModel.findOne({ where: { uuid }, rejectOnEmpty: true });
      return UserModel.toEntity(user);
    }catch{
      throw new Error('User not found');
    }
  }

  async findByEmailOrFail(email: string): Promise<UserEntity> {
    try{
      const user = await UserModel.findOne({ where: { email }, rejectOnEmpty: true });
      return UserModel.toEntity(user);
    }catch{
      throw new Error('User not found');
    }
  }

  async findByUsernameOrFail(username: string): Promise<UserEntity> {
    try{
      const user = await UserModel.findOne({ where: { username }, rejectOnEmpty: true });
      return UserModel.toEntity(user);
    }catch{
      throw new Error('User not found');
    }
  }

  async update(entity: UserEntity): Promise<UserEntity> {
    const user = await UserModel.findOne({ where: { email: entity.email }, rejectOnEmpty: false });
    if(!user) throw new Error('User does not exists');

    const [ affectedCount, _ ] = await UserModel.update({
      name: entity.name,
      username: entity.username,
      email: entity.email,
      password: entity.password
    }, { where: { uuid: entity.uuid }, returning: false });
    if(affectedCount === 0) throw new Error('No rows affected');

    return entity;
  }

}
