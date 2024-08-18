import { Sequelize } from "sequelize-typescript";
import {sharedModels} from "../@shared";

export const sequelizeSQLite = new Sequelize(process.env.SQLITE_DB_URI || 'sqlite::memory:');
sequelizeSQLite.addModels([
  ...sharedModels
])

