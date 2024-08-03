import { Sequelize } from "sequelize-typescript";
import {sharedModels} from "../@shared";


const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.POSTGRES_DB_HOST,
  username: process.env.POSTGRES_DB_USER,
  password: process.env.POSTGRES_DB_PASSWORD,
  database: process.env.POSTGRES_DB_NAME,
  port: process.env.POSTGRES_DB_PORT ? parseInt(process.env.POSTGRES_DB_PORT) : 5432,
});
sequelize.addModels([
  ...sharedModels
])

export default sequelize