import {Router} from "express";
import {RbacService} from "../../../domain/authorization/service/rbac.service";
import {RoleEntity} from "../../../domain/authorization/entity/rbac/role.entity";
import {PermissionEntity} from "../../../domain/authorization/entity/rbac/permission.entity";

const rbacRouter = Router();

rbacRouter.get('/permissions', async (req, res) => {
  const rbacService = new RbacService();
  const permissions = await rbacService.getPermissions();
  return res.send(permissions);
})

rbacRouter.get('/roles', async (req, res) => {
  const rbacService = new RbacService();
  const roles = await rbacService.getRoles();
  return res.send(roles);
})

rbacRouter.post('/roles', async (req, res) => {
  const rbacService = new RbacService();
  const role = await rbacService.createRole(RoleEntity.from(req.body));

  return res.send(role);
})

rbacRouter.post('/permissions', async (req, res) => {
  const rbacService = new RbacService();
  const permission = await rbacService.createPermission(PermissionEntity.from(req.body));
  return res.send(permission);
})

export default rbacRouter;
