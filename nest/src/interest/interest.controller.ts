import { Controller, Get, Post, Body } from '@nestjs/common';
import { InterestService } from './interest.service';

@Controller('interest')
export class InterestController {
  constructor(private readonly interestService: InterestService) {}

  @Get()
  async findAll() {
    return this.interestService.findAll();
  }

  @Post()
  async create(
    @Body()
    dto: {
      user_id: number;
      stock_code: string;
      stock_name: string;
      added_at: string;
    },
  ) {
    return this.interestService.create(dto);
  }

  @Get('hello')
  getHello(): string {
    return this.interestService.getHello();
  }
}
