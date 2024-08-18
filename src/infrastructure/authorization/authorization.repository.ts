import {
  AuthorizationRepositoryInterface
} from "../../domain/authorization/repository/authorization.repository.interface";
import {AuthorizationEntity} from "../../domain/authorization/entity/authorization.entity";
import {RbacEntity} from "../../domain/authorization/entity/rbac/rbac.entity";
import RbacModel from "../db/@shared/models/rbac/Rbac.model";
import RbacRoleModel from "../db/@shared/models/rbac/RbacRole.model";
import RbacPermissionModel from "../db/@shared/models/rbac/RbacPermission.model";
import RbacRolePermissionModel from "../db/@shared/models/rbac/RbacRolePermission.model";

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

  async findPermissionsByUserUuid(uuid: string): Promise<AuthorizationEntity> {
    return new AuthorizationEntity({
      rbac: await AuthorizationRepository._findRbacPermissionsByUserUuid(uuid)
    });
  }

  private static async _findRbacPermissionsByUserUuid(uuid: string): Promise<RbacEntity> {
    const rbac = await RbacModel.findOne({ where: { userUuid: uuid }, include: [{
        model: RbacRoleModel,
        include: [{
          model: RbacRolePermissionModel,
          include: [RbacPermissionModel]
        }]
      }], rejectOnEmpty: true });
    return RbacModel.toEntity(rbac);
  }

}
