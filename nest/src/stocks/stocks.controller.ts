// src/stock/stock.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { StockService } from './stocks.service';

// 이 컨트롤러는 /stock으로 시작하는 URL 요청을 처리함
@Controller('stock')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  // GET 요청 중에서 /stock/price/:code 형태의 URL에 반응
  @Get('price/:code')
  async getPrice(@Param('code') code: string) {
    // 먼저 서비스에서 애게스 토큰을 받아옴 (API 인증용)
    const accessToken = await this.stockService.getAccessToken();

    // 받은 액세스 토큰과 종목 코드를 너며서 실제 주식 가격을 받아옴
    return this.stockService.getStockPrice(accessToken, code);
  }
}
