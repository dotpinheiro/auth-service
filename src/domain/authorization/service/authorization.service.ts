import {AuthorizationRepository} from "../../../infrastructure/authorization/authorization.repository";

export class AuthorizationService {

  private _authorizationRepository: AuthorizationRepository;
  constructor(authorizationRepository = new AuthorizationRepository()) {
    this._authorizationRepository = authorizationRepository;
  }

  async checkPermission(userUuid: string, permission: string): Promise<boolean> {
    const userPermissions = await this._authorizationRepository.findPermissionsByUserUuid(userUuid);
    const someInvalid = userPermissions.rbac.roles.some((role) => role.permissions.some((perm) => perm.name !== permission));
    return !someInvalid;
  }
}
