import { Controller, Get, UseGuards } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('portfolio')
@UseGuards(AuthGuard('jwt'))
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Get()
  async findAll() {
    return this.portfolioService.findAll();
  }

  @Get('hello')
  getHello(): string {
    return this.portfolioService.getHello();
  }
}
