import { Controller, Get, Param } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get(':stockName')
  getNews(@Param('stockName') stockName: string) {
    return this.newsService.fetchNews(stockName);
  }
}
