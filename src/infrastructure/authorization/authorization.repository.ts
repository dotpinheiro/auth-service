import {
  AuthorizationRepositoryInterface
} from "../../domain/authorization/repository/authorization.repository.interface";
import {AuthorizationEntity} from "../../domain/authorization/entity/authorization.entity";

export class AuthorizationRepository implements AuthorizationRepositoryInterface{
  create(entity: AuthorizationEntity): Promise<AuthorizationEntity> {
    return Promise.resolve(undefined);
  }

  delete(entity: AuthorizationEntity): Promise<boolean> {
    return Promise.resolve(false);
  }

  findAll(): Promise<AuthorizationEntity[]> {
    return Promise.resolve([]);
  }

  findOne(entity: AuthorizationEntity): Promise<AuthorizationEntity> {
    return Promise.resolve(undefined);
  }

  findOneByUuid(uuid: string): Promise<AuthorizationEntity> {
    return Promise.resolve(undefined);
  }

  update(entity: AuthorizationEntity): Promise<AuthorizationEntity> {
    return Promise.resolve(undefined);
  }

  findPermissionsByUserUuid(uuid: string): Promise<AuthorizationEntity> {
    return Promise.resolve(undefined);
  }

}
