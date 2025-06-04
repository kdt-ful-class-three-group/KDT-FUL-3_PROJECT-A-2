import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { StockApiService } from './apiStocksSimulated.service';

@Module({
  imports: [HttpModule],
  providers: [StockApiService],
  exports: [StockApiService], // 다른 모듈에서 사용할 수 있도록 export
})
export class StockApiModule {}
