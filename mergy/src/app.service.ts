import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('MATH_TCP_SERVICE') private tcp_client: ClientProxy,
    @Inject('MATH_REDIS_SERVICE') private redis_client: ClientProxy,
    @Inject('MATH_RMQ_SERVICE') private rabbit_client: ClientProxy,
  ) {}

  tcpHello(data: number[]) {
    return this.tcp_client.send<number, number[]>('tcp-add', data);
  }

  redisHello(data: number[]) {
    this.redis_client.emit('redis-add', data);
  }

  rabbitHello(data: number[]) {
    this.rabbit_client.emit('rabbit-add', data);
  }
}
