import {UserService} from "../../user/service/user.service";
import {UserEntity} from "../../user/entity/user.entity";
import {faker} from "@faker-js/faker";
import {AuthenticationEntity} from "./authentication.entity";
import jwt from "jsonwebtoken";

describe('Authentication Entity tests', () => {
  it('mounts an authentication entity based on an user', async () => {
    const jwtSpy = jest.spyOn(jwt, 'sign').mockImplementation(() => 'token');

    const user = await new UserEntity()
    await user.create({
      email: faker.internet.email(),
      name: faker.internet.displayName(),
      username: faker.internet.userName(),
      password: faker.internet.password(),
    });
    const authEntity = new AuthenticationEntity({
      user
    })
    expect(authEntity.user).toEqual(user);
    expect(authEntity.session.token).toEqual('token');
    expect(jwtSpy).toHaveBeenCalledTimes(1);
  })

})
