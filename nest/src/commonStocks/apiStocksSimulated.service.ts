import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { parseStringPromise } from 'xml2js';

@Injectable()
export class StockApiService {
  private readonly serviceKey = process.env.SERVICE_KEY;

  constructor(private readonly httpService: HttpService) {}

  async fetchStockData(date: string): Promise<any[]> {
    const url = `https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo?serviceKey=${this.serviceKey}&endBasDt=${date}&numOfRows=40&pageNo=1&resultType=json`;
    const response: AxiosResponse = await this.httpService.axiosRef.get(url, {
      responseType: 'text',
    });

    console.log('API 호출 날짜:', date);
    console.log('API 원본 응답:', response.data);

    let data: any;
    try {
      data = JSON.parse(response.data);
    } catch {
      data = await parseStringPromise(response.data, { explicitArray: false });
    }

    console.log('파싱된 data:', data);

    let items =
      data?.response?.body?.items?.item ||
      data?.OpenAPI_ServiceResponse?.response?.body?.items?.item ||
      [];

    if (items && !Array.isArray(items)) {
      items = [items];
    }
    console.log('최종 items:', items);

    return items;
  }
}
