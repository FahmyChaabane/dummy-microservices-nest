import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { MathService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly mathService: MathService) {}

  @EventPattern('redis-add')
  accumulate(data: number[]): void {
    console.log('Adding from redisy SUBSCRIBER 1 == ' + data.toString());
    console.log('result 1: ', this.mathService.accumulate(data));
  }
}
