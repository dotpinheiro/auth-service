import {AuthenticationService} from "./authentication.service";
import {UserEntity} from "../../user/entity/user.entity";
import {faker} from "@faker-js/faker";
import {UserService} from "../../user/service/user.service";
import jwt from 'jsonwebtoken';

jest.mock('../../user/service/user.service');

describe('AuthenticationService tests', () => {

  const baseUsers = [1,2,3,4].map(() => ({ name: faker.person.fullName(), email: faker.internet.email(), username: faker.internet.userName(), password: faker.internet.password()}))
  let users: Array<UserEntity> = [];

  let userService = new UserService();

  let service = new AuthenticationService(userService);

  beforeEach(async () => {
    jest.clearAllMocks();
    users = await Promise.all(baseUsers.map((baseUser) => (new UserEntity()).create(baseUser)))
    jest.spyOn(userService, 'findUserByEmail').mockImplementationOnce(async (email) => {
      const user = users.find(user => user.email === email);
      if(!user) throw new Error('User not found');
      return user;
    });
  })

  describe('Success cases', () => {

    it('authenticates a user', async () => {
      const checkPasswordSpy = jest.spyOn(users[0], 'checkPassword');
      const jwtSpy = jest.spyOn(jwt, 'sign').mockImplementation(() => 'token');

      const response = await service.authenticate(baseUsers[0].email, baseUsers[0].password);
      expect(jwtSpy).toHaveBeenCalledTimes(1);
      expect(checkPasswordSpy).toHaveBeenCalledTimes(1)

      expect(response.user).toEqual(users[0]);
      expect(response.session).toBeDefined();
      expect(response.session.token).toEqual('token');
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
