import { Controller, Get } from '@nestjs/common';
import { StocksService } from './stocks.service';

@Controller("stock")
export class StocksController {
  constructor(private readonly appService: StocksService) {}

  @Get("/test")
  getHello(): string {
    return this.appService.getStock();
  }
}
