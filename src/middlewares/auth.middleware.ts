import {NextFunction, Response, Request} from "express";
import jwt from 'jsonwebtoken';
import {UserService} from "../domain/user/service/user.service";

export const authMiddleware = (requiredPermissions: Array<string> = []) => async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).send('Unauthorized');
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send('Unauthorized');
    }
    req.body.user = decoded;
  });

  const userService = new UserService();
  const user = await userService.findUserWithPermissions(req.body.user.id);

  const reject = requiredPermissions?.some((role: string) => !user.authorization?.rbac?.checkPermission(role));
  if (reject) {
    return res.status(403).send('Forbidden');
  }

  next();
}
