import {
  Controller,
  Get,
  Post,
  Body,
  Res,
  Param,
  Put,
  Req,
  Delete,
} from '@nestjs/common';
import { InterestService } from './interest.service';
// import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

// @UseGuards(AuthGuard('jwt'))
@Controller('interest')
export class InterestController {
  constructor(private readonly interestService: InterestService) {}

  @Get()
  async getInterestForMemberId(@Res() res, @Req() req: Request) {
    const member_id =
      req.session.member_id === undefined ? '0' : String(req.session.member_id);
    console.log(member_id, 'in controller');
    const result = await this.interestService.getInterestForMemberId(member_id);
    console.log(result);
    return res.json(result);
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
