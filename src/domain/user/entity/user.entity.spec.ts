import {UserEntity, UserEntityErrors} from "./user.entity";
import { faker } from '@faker-js/faker';
import { validate } from "uuid";

describe('UserEntity tests', () => {

  describe('Password Hash', () => {
    it('hashes a password', async () => {
      const user = new UserEntity()
      const defaultPassword = faker.internet.password();
      await user.create({
        email: faker.internet.email(),
        name: faker.internet.displayName(),
        username: faker.internet.userName(),
        password: defaultPassword,
      });
      expect(user.password).toBeDefined();
      expect(user.password).not.toBe(defaultPassword);
    })

    it('checks a password', async () => {
      const user = new UserEntity()
      const defaultPassword = faker.internet.password();
      await user.create({
        email: faker.internet.email(),
        name: faker.internet.displayName(),
        username: faker.internet.userName(),
        password: defaultPassword,
      });
      expect(await user.checkPassword(defaultPassword)).toBe(true);
    })

    it('fails when password is invalid', async () => {
      const user = new UserEntity()
      const defaultPassword = faker.internet.password();
      await expect(async () => {
        await user.create({
          email: faker.internet.email(),
          name: faker.internet.displayName(),
          username: faker.internet.userName(),
          password: defaultPassword,
        });
        await user.checkPassword('123');
      }).rejects.toThrow('Invalid password');
    })
  })

  describe('User validation', () => {
    it('passes when user is valid', async () => {
      const user = new UserEntity()
      await user.create({
        email: faker.internet.email(),
        name: faker.internet.displayName(),
        username: faker.internet.userName(),
        password: faker.internet.password(),
      });
      expect(validate(user.uuid)).toBe(true);
    })

    it('fails when password is invalid', async () => {
      const user = new UserEntity()
      await expect(async () => {
        await user.create({
          email: faker.internet.email(),
          name: faker.internet.displayName(),
          username: faker.internet.userName(),
          password: '123',
        });
      }).rejects.toThrow(UserEntityErrors.INVALID_PASSWORD);
    })

    it('fails when username is invalid', async () => {
      const user = new UserEntity()
      await expect(async () => {
        await user.create({
          email: faker.internet.email(),
          name: faker.internet.displayName(),
          username: '123',
          password: faker.internet.password(),
        });
      }).rejects.toThrow(UserEntityErrors.INVALID_USERNAME);
    })

    it('fails when email is invalid', async () => {
      const user = new UserEntity()
      await expect(async () => {
        await user.create({
          email: '123',
          name: faker.internet.displayName(),
          username: faker.internet.userName(),
          password: faker.internet.password(),
        });
      }).rejects.toThrow(UserEntityErrors.INVALID_EMAIL);
    })
  })

  describe('User creation', () => {
    it('creates a valid user', async () => {
      const user = new UserEntity()
      const defaultPassword = faker.internet.password();
      await user.create({
        email: faker.internet.email(),
        name: faker.internet.displayName(),
        username: faker.internet.userName(),
        password: defaultPassword,
      });
      expect(user.uuid).toBeDefined();
      expect(validate(user.uuid)).toBe(true);
      expect(user).toBeInstanceOf(UserEntity);
      expect(user.email).toBeDefined();
      expect(user.email).toMatch(/@/);
      expect(user.username).toBeDefined();
      expect(user.name).toBeDefined();
      expect(user.password).toBeDefined();
      expect(await user.checkPassword(defaultPassword)).toBe(true);
    })
  })
})
