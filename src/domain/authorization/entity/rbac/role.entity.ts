import { PermissionEntity } from "./permission.entity";

interface RoleParams {
    id: string;
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

}
