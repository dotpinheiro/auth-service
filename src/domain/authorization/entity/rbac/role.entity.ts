import { PermissionEntity } from "./permission.entity";
import RbacRoleModel from "../../../../infrastructure/db/@shared/models/rbac/RbacRole.model";

interface RoleParams {
    id: number;
    name: string;
    permissions: Array<PermissionEntity>
}

export class RoleEntity {
    private readonly _id: RoleParams['id'];
    private readonly _name: RoleParams['name'];
    private readonly _permissions: RoleParams['permissions']

    constructor(params: RoleParams){
        this._id = params.id;
        this._name = params.name;
        this._permissions = params.permissions
    }

    get id(){
        return this._id;
    }

    get name(){
        return this._name
    }

    get permissions(){
        return this._permissions
    }

    static from(model: RbacRoleModel): RoleEntity {

      let permissions = model.permissions?.map((rolePermissions) =>
        rolePermissions?.permissions?.map((permission =>
            PermissionEntity.from(permission)
        ))
      );

      return new RoleEntity({
          id: model.id,
          name: model.name,
          permissions: permissions.reduce((acc, val) => acc.concat(val), [])
      });
    }

}
