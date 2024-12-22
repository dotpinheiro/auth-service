import {RbacRepository} from "../../../infrastructure/authorization/rbac.repository";
import {RoleEntity} from "../entity/rbac/role.entity";
import {PermissionEntity} from "../entity/rbac/permission.entity";

export class RbacService {
  private _rbacRepository: RbacRepository;

  constructor(rbacRepository = new RbacRepository()) {
    this._rbacRepository = rbacRepository
  }

  async getPermissions() {
    return await this._rbacRepository.getPermissions();
  }

  async getRoles() {
    return await this._rbacRepository.getRoles();
  }

  async createRole(role: RoleEntity) {
    return await this._rbacRepository.createRole(role);
  }

  async createPermission(permission: PermissionEntity) {
    return await this._rbacRepository.createPermission(permission);
  }

}
