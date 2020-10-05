import { Injectable } from '@nestjs/common';
import { Message } from '@testref2/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
