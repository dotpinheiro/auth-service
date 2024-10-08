import {BaseEntity} from "../../../@shared/entity/base.entity";
import {AccessPolicyEntity} from "./access-policy.entity";
import {AbacAccessPolicyModel} from "../../../../infrastructure/db/@shared/models/abac/AbacAccessPolicy.model";
import {AbacModel} from "../../../../infrastructure/db/@shared/models/abac/Abac.model";


export class AbacEntity extends BaseEntity {
  private readonly _policies: Array<AccessPolicyEntity>;

  constructor(policies: Array<AccessPolicyEntity>){
    super();
    this._policies = policies;
  }

  get policies(){
    return this._policies;
  }

  checkPolicy(userAttribute: string, resourceAttribute: string, action: string) {
    return this._policies?.some(policy => policy.checkPolicy(userAttribute, resourceAttribute, action));
  }

  static from(model: AbacModel): AbacEntity {
    const policies = model?.policies?.map((policy) => AccessPolicyEntity.from(policy));
    return new AbacEntity(policies);
  }
}
