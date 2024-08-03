import { Sequelize } from "sequelize-typescript";
import {sharedModels} from "../@shared";


const sequelize = new Sequelize(process.env.SQLITE_DB_URI || 'sqlite::memory:');
sequelize.addModels([
  ...sharedModels
])

export default sequelize
