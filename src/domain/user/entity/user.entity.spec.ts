import {UserEntity} from "./user.entity";
import { faker } from '@faker-js/faker';
import { validate } from "uuid";

describe('UserEntity tests', () => {

  it('should be defined', () => {
    const defaultUserEntity = new UserEntity()
    expect(defaultUserEntity).toBeDefined();
  })

  it('should be a valid user', async () => {
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
