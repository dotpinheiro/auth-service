import { Router } from 'express';

const authRouter = Router();

authRouter.post('/', (req, res) => {
  res.send('Login');
});

export default authRouter;
