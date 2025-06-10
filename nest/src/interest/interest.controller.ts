import { Controller, Get, Post, Body, Res, Param, Put, Req, Delete } from '@nestjs/common';
import { InterestService } from './interest.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

// @UseGuards(AuthGuard('jwt'))
@Controller('interest')
export class InterestController {
  constructor(private readonly interestService: InterestService) { }

  @Get()
  async getInterestForMemberId(@Req() req: Request) {
    return this.interestService.getInterestForMemberId(req);
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
