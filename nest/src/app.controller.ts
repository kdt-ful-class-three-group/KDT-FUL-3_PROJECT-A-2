import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { pool } from './DB/DB';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test')
  async getwordsList() {
    const result = await pool.query('SELECT * FROM words');
    return result.rows;
  }
}
