import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
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

  // @Get()
  // findAll(): Promise<InterestEntity[]> {
  //   return this.interestService.findAll();
  // }

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

  @Delete(':stock_code')
  async remove(@Param('stock_code') stock_code: string) {
    return this.interestService.remove(stock_code);
  }

  @Get('hello')
  getHello(): string {
    return this.interestService.getHello();
  }
}
