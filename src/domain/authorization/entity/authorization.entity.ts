import {RbacEntity} from "./rbac/rbac.entity";

interface AuthorizationTypes {
  rbac: RbacEntity;
}

export class AuthorizationEntity {

  private readonly _rbac: RbacEntity;

  constructor(authorizationTypes: AuthorizationTypes){
    this._rbac = authorizationTypes.rbac;
  }

  get rbac(){
    return this._rbac;
  }

}
