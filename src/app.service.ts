import { Injectable } from '@nestjs/common';
import { dogEntity } from './db/entities/dog.entity';

@Injectable()
export class AppService {
  getHello(): string {
    dogEntity.findOne();
    return 'Hello World!';
  }
}
