import UserModel from "./models/User.model";
import RbacModel from "./models/rbac/Rbac.model";
import RbacRoleModel from "./models/rbac/RbacRole.model";
import RbacPermissionModel from "./models/rbac/RbacPermission.model";
import RbacRolePermissionModel from "./models/rbac/RbacRolePermission.model";

export const sharedModels = [
  UserModel,
  RbacModel,
  RbacRoleModel,
  RbacRolePermissionModel,
  RbacPermissionModel
]
