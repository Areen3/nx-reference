import { Controller, Get } from '@nestjs/common';
import { MessageApi } from '@testref2/api-interfaces';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): MessageApi {
    return this.appService.getData();
  }
}
// kom 222
