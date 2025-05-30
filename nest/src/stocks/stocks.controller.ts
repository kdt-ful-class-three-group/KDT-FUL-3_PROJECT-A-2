// src/stock/stock.controller.ts
import { Controller, Get } from '@nestjs/common';
import { StockService } from './stocks.service';

// 이 컨트롤러는 /stock으로 시작하는 URL 요청을 처리함
@Controller('stock')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Get('stockCommon')
  async getStockList(): Promise<string> {
    return await this.stockService.getStockList();
  }
}
