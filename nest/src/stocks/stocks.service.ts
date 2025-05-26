import { Injectable } from '@nestjs/common';

@Injectable()
export class StocksService {
  getStock(): string {
    return 'im stock router';
  }
}
