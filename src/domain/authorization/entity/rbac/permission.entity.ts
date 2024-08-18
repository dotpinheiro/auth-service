import RbacPermissionModel from "../../../../infrastructure/db/@shared/models/rbac/RbacPermission.model";

interface PermissionParams {
    id: number;
    name: string;
}

export class PermissionEntity {
    private readonly _id: PermissionParams['id']
    private readonly _name: PermissionParams['name']

    constructor(params: PermissionParams){
        this._id = params.id;
        this._name = params.name;
    }

    get id(){
        return this._id;
    }

    get name(){
        return this._name;
    }

    static from(model: RbacPermissionModel): PermissionEntity {
        return new PermissionEntity({
            id: model.id,
            name: model.name
        });
    }

}
