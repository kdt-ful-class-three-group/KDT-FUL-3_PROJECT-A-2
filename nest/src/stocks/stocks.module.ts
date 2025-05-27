// src/stock/stock.module.ts
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { StockService } from './stocks.service';
import { StockController } from './stocks.controller';

// 이 파일은 Stock 관련 기능을 하나의 모듈로 묶은 것
@Module({
  imports: [HttpModule],
  controllers: [StockController],
  providers: [StockService],
})
export class StockModule {}
