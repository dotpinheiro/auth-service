import {UserService} from "./user.service";
import {UserRepository} from "../../../infrastructure/user/user.repository";
import {AuthorizationRepository} from "../../../infrastructure/authorization/authorization.repository";
import {faker} from "@faker-js/faker";
import {UserEntity} from "../entity/user.entity";
import {DatabaseHandler, DatabaseHandlers} from "../../../infrastructure/db/database-handler";

describe('User Service Test', () => {

    const userRepository = new UserRepository();
    const authorizationRepository = new AuthorizationRepository();

    const service = new UserService(userRepository, authorizationRepository)
    const databaseHandler = new DatabaseHandler(process.env.DEFAULT_DB_HANDLER as DatabaseHandlers);

    beforeAll(async () => {
      jest.clearAllMocks();
      await databaseHandler.handler.sync()
    })

    afterAll(async () => {
      await databaseHandler.handler.close();
    })

    describe('User creation', () => {
        it('creates a new user', async () => {
          const user = new UserEntity();
          await user.create({
            email: faker.internet.email(),
            name: faker.internet.displayName(),
            username: faker.internet.userName(),
            password: faker.internet.password(),
          })
          const createdUser = await service.createUser(user)
          expect(createdUser).toEqual(user)
        })
    })


    describe('Find user', () => {
      const baseUsers = [1,2,3,4].map(() => ({ name: faker.person.fullName(), email: faker.internet.email(), username: faker.internet.userName(), password: faker.internet.password()}))
      let users: Array<UserEntity> = [];

      beforeAll(async () => {
        users = await Promise.all(baseUsers.map((baseUser) => (new UserEntity()).create(baseUser)))
        await Promise.all(users.map((user) => service.createUser(user)))
      })

      describe('Find user with permissions',  () => {
        it('throws error when user does not have any permissions', () => {
          expect(async () => {
            const user = await service.findUserWithPermissions(users[0].uuid);
            expect(user).toEqual(users[0]);
            expect(user.authorization).toBeDefined();
          }).rejects.toThrowError()
        })
      })



      describe('Find by email', () => {
        const findUserByEmailSpy = jest.spyOn(userRepository, 'findByEmailOrFail');

        it('finds a user by email', async () => {
          const user = await service.findUserByEmail(users[0].email);

          expect(findUserByEmailSpy).toHaveBeenCalledTimes(1);
          expect(user).toEqual(user);
        })

        it('throws not found when email does not exists', async() => {
          await expect(async () => {
            await service.findUserByEmail('mock');
          }).rejects.toThrow('User not found')
          expect(findUserByEmailSpy).toHaveBeenCalledTimes(1);
        })
      })

      describe('Find by username', () => {
        const findUserByUsernameSpy = jest.spyOn(userRepository, 'findByUsernameOrFail');

        it('finds an user by username', async() => {
          const user = await service.findUserByUsername(users[1].username);

          expect(findUserByUsernameSpy).toHaveBeenCalledTimes(1);
          expect(user).toEqual(user);
        })

        it('throws not found when username does not exists', async () => {
          await expect(async () => {
            await service.findUserByUsername('mock');
          }).rejects.toThrow('User not found');
          expect(findUserByUsernameSpy).toHaveBeenCalledTimes(1)
        })
      })
    })
})
