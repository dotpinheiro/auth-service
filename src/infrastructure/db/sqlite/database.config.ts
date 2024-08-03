import { Sequelize } from "sequelize-typescript";
import UserModel from "./models/User.model";


const sequelize = new Sequelize('sqlite::memory:');
sequelize.addModels([
  UserModel
])

export default sequelize
