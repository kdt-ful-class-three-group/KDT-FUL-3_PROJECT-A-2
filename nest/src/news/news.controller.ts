import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { NewsService } from './news.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('news')
@UseGuards(AuthGuard('jwt'))
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get(':stockName')
  getNews(@Param('stockName') stockName: string) {
    return this.newsService.fetchNews(stockName);
  }
}
