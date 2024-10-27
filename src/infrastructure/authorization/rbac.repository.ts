import {RbacRepositoryInterface} from "../../domain/authorization/repository/rbac.repository.interface";
import RbacPermissionModel from "../db/@shared/models/rbac/RbacPermission.model";
import RbacRoleModel from "../db/@shared/models/rbac/RbacRole.model";
import {PermissionEntity} from "../../domain/authorization/entity/rbac/permission.entity";
import {RoleEntity} from "../../domain/authorization/entity/rbac/role.entity";

export class RbacRepository implements RbacRepositoryInterface {
  async getPermissions(): Promise<PermissionEntity[]> {
    const permissions = await RbacPermissionModel.findAll();
    return permissions.map(permission => RbacPermissionModel.toEntity(permission));
  }

  async getRoles(): Promise<RoleEntity[]> {
    const roles = await RbacRoleModel.findAll();
    return roles.map(role => RbacRoleModel.toEntity(role));
  }

  create(entity: RbacRepositoryInterface): Promise<RbacRepositoryInterface> {
    return Promise.resolve(undefined);
  }

  delete(entity: RbacRepositoryInterface): Promise<boolean> {
    return Promise.resolve(false);
  }

  findAll(): Promise<RbacRepositoryInterface[]> {
    return Promise.resolve([]);
  }

  findOne(entity: RbacRepositoryInterface): Promise<RbacRepositoryInterface> {
    return Promise.resolve(undefined);
  }

  findOneByUuid(uuid: string): Promise<RbacRepositoryInterface> {
    return Promise.resolve(undefined);
  }

  update(entity: RbacRepositoryInterface): Promise<RbacRepositoryInterface> {
    return Promise.resolve(undefined);
  }

  async createRole(role: RoleEntity): Promise<RoleEntity> {
    const newRole = await RbacRoleModel.create(role);
    return RbacRoleModel.toEntity(newRole);
  }

  async createPermission(permission: PermissionEntity): Promise<PermissionEntity> {
    const newPermission = await RbacPermissionModel.create(permission);
    return RbacPermissionModel.toEntity(newPermission);
  }
}
