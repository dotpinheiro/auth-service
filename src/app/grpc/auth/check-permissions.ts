import {UserService} from "../../../domain/user/service/user.service";

export async function checkPermissions(call: any, callback: any) {
  const { request } = call;
  const { userId, requiredPermissions } = request;
  console.log(`Checking permissions for user ${userId} with permissions ${requiredPermissions}`);
  const userService = new UserService();
  const user = await userService.findUserWithPermissions(userId);

  const reject = requiredPermissions?.some((role: string) => !user.authorization.rbac.checkPermission(role));
  callback(null, { allowed: !reject });
}
