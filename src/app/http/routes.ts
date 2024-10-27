import express from 'express';
import authRouter from "./auth/auth.routes";
import userRouter from "./user/user.routes";
import rbacRouter from "./rbac/rbac.routes";

const router = express.Router();

router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/rbac', rbacRouter);

export default router;
