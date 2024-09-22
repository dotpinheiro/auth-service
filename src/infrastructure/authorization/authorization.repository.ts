import {
  AuthorizationRepositoryInterface
} from "../../domain/authorization/repository/authorization.repository.interface";
import {AuthorizationEntity} from "../../domain/authorization/entity/authorization.entity";
import {RbacEntity} from "../../domain/authorization/entity/rbac/rbac.entity";
import RbacModel from "../db/@shared/models/rbac/Rbac.model";
import RbacRoleModel from "../db/@shared/models/rbac/RbacRole.model";
import RbacPermissionModel from "../db/@shared/models/rbac/RbacPermission.model";
import RbacRolePermissionModel from "../db/@shared/models/rbac/RbacRolePermission.model";
import {AbacEntity} from "../../domain/authorization/entity/abac/abac.entity";
import {AbacAccessPolicyModel} from "../db/@shared/models/abac/AbacAccessPolicy.model";
import {AbacUserAttributeModel} from "../db/@shared/models/abac/AbacUserAttribute.model";
import {AbacResourceAttributeModel} from "../db/@shared/models/abac/AbacResourceAttribute.model";
import {AbacActionModel} from "../db/@shared/models/abac/AbacAction.model";
import {AbacModel} from "../db/@shared/models/abac/Abac.model";

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
      rbac: await AuthorizationRepository._findRbacPermissionsByUserUuid(uuid),
      abac: await AuthorizationRepository._findAbacPermissionsByUserUuid(uuid)
    });
  }

  private static async _findRbacPermissionsByUserUuid(uuid: string): Promise<RbacEntity> {
    const rbac = await RbacModel.findOne({ where: { userUuid: uuid }, include: [{
        model: RbacRoleModel,
        include: [{
          model: RbacRolePermissionModel,
          include: [RbacPermissionModel]
        }]
      }], rejectOnEmpty: false });
    return RbacModel.toEntity(rbac);
  }

  private static async _findAbacPermissionsByUserUuid(uuid: string): Promise<AbacEntity> {
    const abac = await AbacModel.findOne({ where: { userUuid: uuid }, include: [{
        model: AbacAccessPolicyModel,
        include: [AbacActionModel, AbacResourceAttributeModel, AbacUserAttributeModel]
    }], rejectOnEmpty: false });
    return AbacModel.toEntity(abac);
  }

}
