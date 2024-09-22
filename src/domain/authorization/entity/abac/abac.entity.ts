import {BaseEntity} from "../../../@shared/entity/base.entity";
import {AccessPolicyEntity} from "./access-policy.entity";


export class AbacEntity extends BaseEntity {
  private readonly _policies: Array<AccessPolicyEntity>;

  constructor(policies: Array<AccessPolicyEntity>){
    super();
    this._policies = policies;
  }

  get policies(){
    return this._policies;
  }
}
