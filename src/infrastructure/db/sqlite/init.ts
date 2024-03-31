import {UserModel} from "./models/User.model";

const isDev = process.env.NODE_ENV === 'development';

const initDb = () => {
  UserModel.sync({ force: isDev });
}
