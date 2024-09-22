import {RbacEntity} from "./rbac/rbac.entity";
import {AbacEntity} from "./abac/abac.entity";

interface AuthorizationTypes {
  rbac: RbacEntity;
  abac: AbacEntity;
}

export class AuthorizationEntity {

  private readonly _rbac: RbacEntity;
  private readonly _abac: AbacEntity;

  constructor(authorizationTypes: AuthorizationTypes){
    this._rbac = authorizationTypes.rbac;
    this._abac = authorizationTypes.abac;
  }

  get rbac(){
    return this._rbac;
  }

  get abac(){
    return this._abac;
  }

}
