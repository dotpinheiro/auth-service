import {RbacEntity} from "./rbac/rbac.entity";
import {AbacEntity} from "./abac/abac.entity";

/* All available authorization types
*  @rbac - Role Based Access Control
*  @abac - Attribute Based Access Control
* */
interface AuthorizationTypes {
  rbac: RbacEntity;
  abac?: AbacEntity;
}

/* Authorization entity */
export class AuthorizationEntity  {

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
