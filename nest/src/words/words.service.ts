import { Injectable } from '@nestjs/common';

@Injectable()
export class WordsService {
  getHello(): string {
    return 'Hello from WordsService!';
  }
}
