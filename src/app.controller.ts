import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async healthCheck() {
    return await this.appService.healthCheck();
  }

  @Get('/error')
  async error() {
    throw new Error('INTERNAL SERVER ERROR');
  }
}
