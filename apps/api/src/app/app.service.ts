import { Injectable } from '@nestjs/common';
import { MessageApi } from '@testref2/api-interfaces';

@Injectable()
export class AppService {
  getData(): MessageApi {
    return { message: 'Welcome to api!', xxx: '' };
  }
}
