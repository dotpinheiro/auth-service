import dotenv from 'dotenv';
import cors from 'cors';
import express, {Express} from "express";
import routes from "./app/http/routes";
import * as protoLoader from "@grpc/proto-loader";
import path from "path";
import * as grpc from "@grpc/grpc-js";
import {checkPermissions} from "./app/grpc/auth/check-permissions";
import { authenticate } from './app/grpc/auth/authenticate';

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

app.use((err:any) => {
  console.log("got error");
  console.error(err);
});

const packageDefinition = protoLoader.loadSync(
  path.resolve(__dirname, 'app/grpc/auth/auth.proto'),
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  } as any);

const routeGuide = grpc.loadPackageDefinition(packageDefinition);
export const grpcServer = new grpc.Server();

grpcServer.addService((routeGuide.auth as any).AuthService.service as any, {
  checkPermissions,
  authenticate
})

export default app;
