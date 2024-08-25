import {AuthenticationService} from "./authentication.service";
import {UserEntity} from "../../user/entity/user.entity";
import {faker} from "@faker-js/faker";
import {UserService} from "../../user/service/user.service";
import jwt from 'jsonwebtoken';
import {DatabaseHandler, DatabaseHandlers} from "../../../infrastructure/db/database-handler";

describe('AuthenticationService tests', () => {

  const baseUsers = [1,2,3,4].map(() => ({ name: faker.person.fullName(), email: faker.internet.email(), username: faker.internet.userName(), password: faker.internet.password()}))
  let users: Array<UserEntity> = [];

  const userService = new UserService();

  const service = new AuthenticationService(userService);
  const databaseHandler = new DatabaseHandler(DatabaseHandlers.SQLITE).handler;

  beforeEach(async () => {
    jest.clearAllMocks();
  })

  beforeAll(async () => {
    await databaseHandler.sync()
    users = await Promise.all(baseUsers.map((baseUser) => (new UserEntity()).create(baseUser)))
    users = await Promise.all(users.map((user) => userService.createUser(user)))
  })

  afterAll(async () => {
    await databaseHandler.close();
  })

  describe('Success cases', () => {
    it('authenticates a user', async () => {
      const jwtSpy = jest.spyOn(jwt, 'sign').mockImplementation(() => 'token');

      const response = await service.authenticate(baseUsers[0].email, baseUsers[0].password);

      expect(response.user.uuid).toEqual(users[0].uuid);
      expect(response.session).toBeDefined();
      expect(response.session.token).toEqual('token');

      expect(jwtSpy).toHaveBeenCalledTimes(1);
    });
  })

  describe('Failure cases', () => {
    it('throws an error if the user does not exist', () => {
      const response = service.authenticate(faker.internet.email(), faker.internet.password());
      expect(response).rejects.toThrowError('User not found');
    });

    it('throws an error if the password is incorrect', () => {
      const response = service.authenticate(baseUsers[0].email, faker.internet.password());
      expect(response).rejects.toThrowError('Invalid password');
    });
  })
})
