import server, {grpcServer} from './server'
import {DatabaseHandler, DatabaseHandlers} from "./infrastructure/db/database-handler";
import * as grpc from '@grpc/grpc-js';
import {Logger} from "./infrastructure/log/log-handler";

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

const databaseHandler = new DatabaseHandler((process.env.DEFAULT_DB_HANDLER as DatabaseHandlers) || DatabaseHandlers.SQLITE);

server.listen({ host, port }, async () => {
  Logger.info(`Server is running on http://${host}:${port}`)
  await databaseHandler.handler.sync({ force: false })
})

const grpcPort = process.env.GRPC_PORT || 'localhost:50051';
grpcServer.bindAsync(grpcPort, grpc.ServerCredentials.createInsecure(), (err, port) => {
  if (err) {
    Logger.error(`gRPC server failed to start: ${err}`);
    return;
  }
  Logger.info(`gRPC server is running on ${port}`);
});
