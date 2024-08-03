import server from './server'
import {DatabaseHandler, DatabaseHandlers} from "./infrastructure/db/database-handler";

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

const databaseHandler = new DatabaseHandler((process.env.DEFAULT_DB_HANDLER as DatabaseHandlers) || DatabaseHandlers.SQLITE);

server.listen({ host, port }, async () => {
  console.info(`Server is running on http://${host}:${port}`)
  await databaseHandler.init();
})

