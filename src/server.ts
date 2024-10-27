import dotenv from 'dotenv';
import cors from 'cors';
import express, {Express} from "express";
import routes from "./app/http/routes";

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

export default app;
