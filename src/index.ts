import server from './server'
import {initDb} from "./infrastructure/db/sqlite/init";

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';


server.listen({ host, port }, async () => {
  console.info(`Server is running on http://${host}:${port}`)
  await initDb();
})

