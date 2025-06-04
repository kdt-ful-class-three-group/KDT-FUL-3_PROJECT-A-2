import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';

@Injectable()
export class StockApiService {
  private readonly serviceKey =
    '%2F%2FyNWMYBpj%2BUWMNJOecVH1q6KYhP2UrjZA8nDYMreg0vjscQMgKCI8uqHwT9CLP1g5C5xVnHzwK7I9%2BxwO%2FqAA%3D%3D'; //! 환경변수에 넣어야함

  constructor(private readonly httpService: HttpService) {}

  async fetchStockData(date: string): Promise<any[]> {
    const url = `https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo`;
    const response: AxiosResponse = await this.httpService.axiosRef.get(url, {
      params: {
        serviceKey: this.serviceKey,
        endBasDt: date,
        numOfRows: 10,
        pageNo: 1,
        resultType: 'json',
      },
    });
    console.log(response);
    return response.data?.response?.body?.items?.item || [];
  }
}
