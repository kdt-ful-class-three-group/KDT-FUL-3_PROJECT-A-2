// src/news/news.service.ts
import { Injectable, HttpException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

// 뉴스 항목 타입 정의: 프론트에 전달할 정보 구조
export interface NewsItem {
  title: string; //뉴스제목
  link: string; // 클릭시 이동할 링크
  pubDate: string; // 발행일
  originallink: string; // 원본 기사 링크
  description: string; //요약 내욕
}
interface NaverApiResponse {
  items: {
    title: string;
    link: string;
    originallink: string;
    description: string;
    pubDate: string;
  }[];
}

@Injectable()
export class NewsService {
  constructor(
    private readonly http: HttpService,
    private readonly config: ConfigService,
  ) {}

  async fetchNews(stockName: string): Promise<NewsItem[]> {
    const clientId = this.config.get<string>('NAVER_CLIENT_ID');
    const clientSecret = this.config.get<string>('NAVER_CLIENT_SECRET');

    // 네이버 뉴스 검색 API 호출
    const response = await firstValueFrom(
      this.http.get<NaverApiResponse>(
        'https://openapi.naver.com/v1/search/news.json',
        {
          headers: {
            'X-Naver-Client-Id': clientId,
            'X-Naver-Client-Secret': clientSecret,
          },
          params: {
            query: stockName, // 검색키위드
            display: 5, // 뉴스 개수
            sort: 'date', // 정렬방식(최신순)
          },
        },
      ),
    );

    // 응답 유효성 검사
    if (!response.data || !Array.isArray(response.data.items)) {
      throw new HttpException('Invalid response from Naver API', 500);
    }

    // HTML 포함된 뉴스 결과를 프론트에 전달
    return response.data.items.map((item) => ({
      title: item.title,
      link: item.link,
      originallink: item.originallink,
      description: item.description,
      pubDate: item.pubDate,
    }));
  }
}
