import {RoleEntity} from "./role.entity";
import RbacModel from "../../../../infrastructure/db/@shared/models/rbac/Rbac.model";
import {BaseEntity} from "../../../@shared/entity/base.entity";

interface RbacParams {
  roles: Array<RoleEntity>
}

export class RbacEntity extends BaseEntity {
  private readonly _roles:  RbacParams['roles']

  constructor(params: RbacParams){
    super();
    this._roles = params.roles;
  }

  get roles(){
    return this._roles;
  }

  static from(model: RbacModel): RbacEntity {
    return new RbacEntity({
      roles: model.roles?.map((role) => RoleEntity.from(role))
    });
  }

  checkPermission(permission: string): boolean {
    return this.roles.some((role) => role.permissions.some((perm) => perm.name === permission));
  }

}
