import {RoleEntity} from "./role.entity";
import RbacModel from "../../../../infrastructure/db/@shared/models/rbac/Rbac.model";

interface RbacParams {
  roles: Array<RoleEntity>
}

export class RbacEntity {
  private readonly _roles:  RbacParams['roles']

  constructor(params: RbacParams){
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

}
