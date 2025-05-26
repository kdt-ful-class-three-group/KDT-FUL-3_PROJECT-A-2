import { Injectable } from '@nestjs/common';

@Injectable()
export class HistoryService {
  getHello(): string {
    return 'Hello from HistoryService!';
  }
}