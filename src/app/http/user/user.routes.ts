import { Router } from 'express';
import {UserService} from "../../../domain/user/service/user.service";
import {UserEntity} from "../../../domain/user/entity/user.entity";
import {authMiddleware} from "../../../middlewares/auth.middleware";

const userRouter = Router();

userRouter.post('/', authMiddleware(['USERS.UPDATE']), async (req, res) => {
  const userService = new UserService();
  const userEntity = new UserEntity();
  await userEntity.create({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });
  try{
    const user = await userService.createUser(userEntity);
    res.send(user);
  }catch (e: any) {
    res.status(400).send(e.message);
  }
});

userRouter.put('/:uuid', authMiddleware(['USERS.CREATE']), async (req, res) => {
  const userService = new UserService();
  const user = await userService.findByUuid(req.params.uuid);
  try{
    user.name = req.body.name;
    user.username = req.body.username;
    user.email = req.body.email;
    user.password = req.body.password;

    const updatedUser = await userService.updateUser(user);

    res.send(updatedUser);
  }catch (e: any) {
    res.status(400).send(e.message);
  }
});

userRouter.get('/', authMiddleware(['USERS.LIST']), async (req, res) => {

  const userService = new UserService();
  const users = await userService.findAll();

  res.send(users);
});

userRouter.get('/:uuid', authMiddleware(['USERS.LIST']), async (req, res) => {
  const userService = new UserService();
  try{
    const user = await userService.findUserWithPermissions(req.params.uuid);
    res.send(user);
  }catch (e: any) {
    res.status(404).send(e.message);
  }
});

export default userRouter;
