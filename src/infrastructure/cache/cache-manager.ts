import {CacheInterface} from "./cache.interface";
import {RedisClient} from "./redis/redis.client";

export class CacheManager {
  private readonly _client: CacheInterface
  constructor() {
    this._client = new RedisClient()
  }

  get client() {
    return this._client
  }
}
