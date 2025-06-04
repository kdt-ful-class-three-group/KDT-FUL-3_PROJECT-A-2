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
      member_id: number;
      stock_code: string;
      stock_name: string;
    },
  ) {
    return this.interestService.create(dto);
  }

  @Get('hello')
  getHello(): string {
    return this.interestService.getHello();
  }
}
