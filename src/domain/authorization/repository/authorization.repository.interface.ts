import {AuthorizationEntity} from "../entity/authorization.entity";
import {BaseRepositoryInterface} from "../../@shared/repository/base.repository.interface";

export interface AuthorizationRepositoryInterface extends BaseRepositoryInterface<AuthorizationEntity> {
  findPermissionsByUserUuid(uuid: string): Promise<AuthorizationEntity>;
}
