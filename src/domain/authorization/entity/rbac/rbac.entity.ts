import {RoleEntity} from "./role.entity";

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

}
