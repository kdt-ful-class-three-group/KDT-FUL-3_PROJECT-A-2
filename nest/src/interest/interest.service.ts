import { Injectable } from '@nestjs/common';

@Injectable()
export class InterestService {
  getHello(): string {
    return 'Hello from InterestService!';
  }
}
