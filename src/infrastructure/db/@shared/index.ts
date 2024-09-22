import UserModel from "./models/User.model";
import RbacModel from "./models/rbac/Rbac.model";
import RbacRoleModel from "./models/rbac/RbacRole.model";
import RbacPermissionModel from "./models/rbac/RbacPermission.model";
import RbacRolePermissionModel from "./models/rbac/RbacRolePermission.model";
import {AbacAccessPolicyModel} from "./models/abac/AbacAccessPolicy.model";
import {AbacActionModel} from "./models/abac/AbacAction.model";
import {AbacResourceModel} from "./models/abac/AbacResource.model";
import {AbacResourceAttributeModel} from "./models/abac/AbacResourceAttribute.model";
import {AbacUserAttributeModel} from "./models/abac/AbacUserAttribute.model";
import {AbacModel} from "./models/abac/Abac.model";

export const sharedModels = [
  UserModel,
  RbacModel,
  RbacRoleModel,
  RbacRolePermissionModel,
  RbacPermissionModel,
  AbacAccessPolicyModel,
  AbacModel,
  AbacActionModel,
  AbacResourceModel,
  AbacResourceAttributeModel,
  AbacUserAttributeModel
]
