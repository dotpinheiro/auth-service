import {CacheInterface} from "../cache.interface";
import Redis from 'ioredis';

export class RedisClient implements CacheInterface {
  private _client: Redis
  constructor() {
    this._client = new Redis({
      host: process.env.REDIS_HOST,
      port: parseInt(process.env.REDIS_PORT),
      password: process.env.REDIS_PASSWORD
    });
  }

  clear() {
    return this._client.flushall()
  }

  delete(key: string) {
    return this._client.del(key)
  }

  get(key: string) {
    return this._client.get(key)
  }

  set(key: string, value: any, ttl: number): void {
    this._client.set(key, value, 'EX', ttl)
  }

}
