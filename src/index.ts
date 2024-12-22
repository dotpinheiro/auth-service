import server, {grpcServer} from './server'
import {DatabaseHandler, DatabaseHandlers} from "./infrastructure/db/database-handler";
import * as grpc from '@grpc/grpc-js';

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

const databaseHandler = new DatabaseHandler((process.env.DEFAULT_DB_HANDLER as DatabaseHandlers) || DatabaseHandlers.SQLITE);
// const isDev = process.env.NODE_ENV === 'development';

server.listen({ host, port }, async () => {
  console.info(`Server is running on http://${host}:${port}`)
  await databaseHandler.handler.sync({ force: false })
})

const grpcPort = process.env.GRPC_PORT || 'localhost:50051';
grpcServer.bindAsync(grpcPort, grpc.ServerCredentials.createInsecure(), (err, port) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`gRPC server is running on port ${port}`);
});
