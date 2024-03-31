import {UserEntity} from "./user.entity";

describe('UserEntity tests', () => {

  const userEntity = new UserEntity()

  it('should be defined', () => {
    expect(userEntity).toBeDefined();
  })

})
