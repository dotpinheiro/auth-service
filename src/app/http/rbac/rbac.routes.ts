import {Router} from "express";
import {RbacService} from "../../../domain/authorization/service/rbac.service";

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
  const role = await rbacService.createRole(req.body);
  return res.send(role);
})

rbacRouter.post('/permissions', async (req, res) => {
  const rbacService = new RbacService();
  const permission = await rbacService.createPermission(req.body);
  return res.send(permission);
})

export default rbacRouter;
