import { Router } from 'express';
import {UserService} from "../../../domain/user/service/user.service";
import {UserEntity} from "../../../domain/user/entity/user.entity";

const userRouter = Router();

userRouter.post('/', async (req, res) => {
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

userRouter.get('/:uuid', async (req, res) => {
  const userService = new UserService();
  try{
    const user = await userService.findUserWithPermissions(req.params.uuid);
    res.send(user);
  }catch (e: any) {
    res.status(404).send(e.message);
  }
});

export default userRouter;
