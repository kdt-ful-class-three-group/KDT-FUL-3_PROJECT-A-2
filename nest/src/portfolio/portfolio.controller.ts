import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('portfolio')
// @UseGuards(AuthGuard('jwt'))
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) { }

  @Get()
  async findByMemberId(@Req() req: Request) {
    const member_id = req.session.member_id === undefined ? '0' : String(req.session.member_id);
    return this.portfolioService.findByMemberId(Number(member_id));
  }

  @Get('hello')
  getHello(): string {
    return this.portfolioService.getHello();
  }
}
