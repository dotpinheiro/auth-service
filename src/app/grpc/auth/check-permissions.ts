import { UserEntity } from "../../../domain/user/entity/user.entity";
import {UserService} from "../../../domain/user/service/user.service";
import jwt from 'jsonwebtoken';

export async function checkPermissions(call: any, callback: any) {
  const { request } = call;
  const { token, requiredPermissions } = request;
  let user: UserEntity;
  let decodedId: string = "";

  jwt.verify(token, process.env.JWT_SECRET, (err: any, decoded: any) => {
    if (err) {
      return callback(null, { allowed: false });
    }
    decodedId = decoded.id;
  });

  console.log(`Checking permissions for user ${decodedId} with permissions ${requiredPermissions}`);
  const userService = new UserService();
  user = await userService.findUserWithPermissions(decodedId);

  const reject = requiredPermissions?.some((role: string) => !user.authorization?.rbac?.checkPermission(role));
  callback(null, { allowed: !reject });
}
