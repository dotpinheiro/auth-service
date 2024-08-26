import {RbacEntity} from "./rbac/rbac.entity";

/* All available authorization types
*  @rbac - Role Based Access Control
*  @abac - Attribute Based Access Control
* */
interface AuthorizationTypes {
  rbac: RbacEntity;
}

/* Authorization entity */
export class AuthorizationEntity  {

  private readonly _rbac: RbacEntity;

  constructor(authorizationTypes: AuthorizationTypes){
    this._rbac = authorizationTypes.rbac;
  }

  /* Rbac getter */
  get rbac(){
    return this._rbac;
  }

}
