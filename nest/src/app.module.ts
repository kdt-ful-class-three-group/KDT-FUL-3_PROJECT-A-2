import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { StockModule } from './stocks/stocks.module';
import { AuthModule } from './auth/auth.module';
import { BankModule } from './bank/bank.module';
import { HistoryModule } from './history/history.module';
import { InterestModule } from './interest/interest.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HttpModule,
    StockModule,
    AuthModule,
    BankModule,
    HistoryModule,
    InterestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
