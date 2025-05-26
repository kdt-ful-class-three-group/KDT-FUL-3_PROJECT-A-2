import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { StockService } from './stocks/stocks.service';
import { StockController } from './stocks/stocks.controller';
import { StockModule } from './stocks/stocks.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HttpModule,
    StockModule,
  ],
  controllers: [AppController, StockController],
  providers: [AppService, StockService],
})
export class AppModule {}
