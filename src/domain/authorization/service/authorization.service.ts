import {AuthorizationRepository} from "../../../infrastructure/authorization/authorization.repository";
import {RbacEntity} from "../entity/rbac/rbac.entity";

export class AuthorizationService {

  private _authorizationRepository: AuthorizationRepository;
  constructor(authorizationRepository = new AuthorizationRepository()) {
    this._authorizationRepository = authorizationRepository;
  }

  async checkPermission(userUuid: string, permission: string): Promise<boolean> {
    const { rbac } = await this._authorizationRepository.findPermissionsByUserUuid(userUuid);
    return !rbac.checkPermission(permission);
  }

  async checkPolicy(userUuid: string, userAttribute: string, resourceAttribute: string, action: string): Promise<boolean> {
    const { abac } = await this._authorizationRepository.findPermissionsByUserUuid(userUuid);
    return !abac.checkPolicy(userAttribute, resourceAttribute, action);
  }

}
