import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('tcp') // return 6 // TCP for request-response
  getHelloTCP() {
    console.log('sending data to tcp microservice');
    return this.appService.tcpHello([1, 2, 3]);
  }

  @Get('redis') // TCP for event driven
  getHelloREDIS() {
    console.log('sending data to redis microservice');
    this.appService.redisHello([3, 3, 3]);
  }

  @Get('rabbit') // TCP for event driven
  getHelloRABBITMQ() {
    console.log('sending data to rabbitmq microservice');
    this.appService.rabbitHello([6, 6, 6]);
  }
}
