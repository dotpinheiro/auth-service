import {RbacRepository} from "../../../infrastructure/authorization/rbac.repository";

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

  async createRole(role) {
    return await this._rbacRepository.createRole(role);
  }

  async createPermission(permission) {
    return await this._rbacRepository.createPermission(permission);
  }

}
