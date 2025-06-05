import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { InterestService } from './interest.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
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
