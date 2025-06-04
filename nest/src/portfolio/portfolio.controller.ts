import { Controller, Get } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';

@Controller('portfolio')
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
