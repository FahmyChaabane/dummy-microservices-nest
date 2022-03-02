import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MathService } from './app.service';

@Controller()
export class AppController {
  constructor(private mathService: MathService) {}

  @MessagePattern('tcp-add')
  async accumulate(data: number[]): Promise<number> {
    console.log('Adding from tcpy ' + data.toString());
    return this.mathService.accumulate(data);
  }
}
