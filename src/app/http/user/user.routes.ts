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
  const user = await userService.createUser(userEntity);
  res.send(user);
});

export default userRouter;
