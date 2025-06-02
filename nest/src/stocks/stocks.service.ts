// src/stock/stock.service.ts
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class StockService {
  constructor(private readonly httpService: HttpService) {}

  async getStockList(): Promise<string> {
    const serviceKey =
      '%2F%2FyNWMYBpj%2BUWMNJOecVH1q6KYhP2UrjZA8nDYMreg0vjscQMgKCI8uqHwT9CLP1g5C5xVnHzwK7I9%2BxwO%2FqAA%3D%3D';
    const url = `https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo?serviceKey=${serviceKey}&beginBasDt=20250101&endBasDt=20250429&numOfRows=10&pageNo=1&resultType=json`;
    try {
      const stockResponse = await firstValueFrom(this.httpService.get(url));
      return stockResponse.data.response.body.items.item;
    } catch (error) {
      throw new Error('api 요청 실패: ' + error.message);
    }
  }
}
