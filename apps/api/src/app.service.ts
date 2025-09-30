import { Injectable } from '@nestjs/common';
import { add } from '@packages/utils';

@Injectable()
export class AppService {
  getHello(): string {
    return add(1, 2).toString();
  }
}
