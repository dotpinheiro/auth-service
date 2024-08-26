import {Sequelize} from "sequelize-typescript";

export interface DatabaseInterface {
  init(): Sequelize;
}
