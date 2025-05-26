import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StocksService } from './stocks/stocks.service';
import { StocksController } from './stocks/stocks.controller';
@Module({
  imports: [],
  controllers: [AppController, StocksController],
  providers: [AppService, StocksService],
})
export class AppModule {}
