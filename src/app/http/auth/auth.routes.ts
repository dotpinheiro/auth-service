import { Router } from 'express';
import {AuthenticationService} from "../../../domain/authentication/service/authentication.service";

const authRouter = Router();

authRouter.post('/', async (req, res) => {
  const { email, password } = req.body;
  try{
    const authService = new AuthenticationService();
    const response = await authService.authenticate(email, password);
    res.send(response);
  }catch(e: any){
   res.status(401).send(e.message);
  }
});

export default authRouter;
