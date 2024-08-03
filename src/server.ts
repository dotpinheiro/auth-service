import dotenv from 'dotenv';
import express, {Express} from "express";
import routes from "./app/http/routes";

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

export default app;
