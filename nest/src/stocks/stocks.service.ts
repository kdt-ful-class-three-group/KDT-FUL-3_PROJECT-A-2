// src/stock/stock.service.ts
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class StockService {
  constructor(private readonly httpService: HttpService) {}

  // 토큰 발급 함수
  async getAccessToken(): Promise<string> {
    const url = 'https://openapivts.koreainvestment.com:29443/oauth2/tokenP';

    // 인증에 필요한 정보들을 바디에 담음
    const body = {
      grant_type: 'client_credentials',
      appkey: process.env.KIS_APP_KEY,
      appsecret: process.env.KIS_APP_SECRET,
    };

    // 요청 헤더 설정(JSON 타입 명시)
    const headers = {
      'Content-Type': 'application/json',
    };

    try {
      // POST 요청으로 토큰 요청 보대고 결과 받음
      const response = await firstValueFrom(
        this.httpService.post(url, body, { headers }),
      );
      return response.data.access_token;
    } catch (error) {
      console.error('토큰 발급 실패:', error.response?.data || error.message);
      throw error;
    }
  }

  // 주식 시세 조회 함수
  async getStockPrice(accessToken: string, code: string) {
    // 주식 시세 조회 API 주소 (모의투자용)
    const url = 'https://openapivts.koreainvestment.com:29443/uapi/domestic-stock/v1/quotations/inquire-price';


    // 요청 헤더 설정(토큰과 앱키 포함)
    const headers = {
      authorization: `Bearer ${accessToken}`,
      appkey: process.env.KIS_APP_KEY,
      appsecret: process.env.KIS_APP_SECRET,
      tr_id: 'FHKST01010100', // 모의투자용 TR-ID
    };

    // 요청 파라미터 설정(시장 구분 + 종목코드)
    // 'J'는 코스피
    // code = 조회할 종목 코드
    const params = {
      fid_cond_mrkt_div_code: 'J',
      fid_input_iscd: code,
    };

    try {
      // get 요청으로 시세 조회
      const response = await firstValueFrom(
        this.httpService.get(url, { headers, params }),
      );

      // 받은 주식 데이터 리턴
      return response.data;
    } catch (error) {
      console.error('시세 조회 실패:', error.response?.data || error.message);
      throw error;
    }
  }
}
