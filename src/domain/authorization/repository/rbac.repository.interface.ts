import {BaseRepositoryInterface} from "../../@shared/repository/base.repository.interface";

export interface RbacRepositoryInterface extends BaseRepositoryInterface<RbacRepositoryInterface>{
  getPermissions(): Promise<any>;
  getRoles(): Promise<any>;
}
