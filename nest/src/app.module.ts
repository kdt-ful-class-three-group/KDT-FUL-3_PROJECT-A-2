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
import { OrdersModule } from './orders/orders.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { UsersModule } from './users/users.module';
import { NewsModule } from './news/news.module';
import { StockSimulatorModule } from './commonStocks/stocksSimulated.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DB_URL, // 환경변수 사용
      autoLoadEntities: true, // entity 자동 인식
      synchronize: true, // 개발용, 운영시 false 권장
    }),
    HttpModule,
    StockModule,
    AuthModule,
    BankModule,
    HistoryModule,
    InterestModule,
    OrdersModule,
    PortfolioModule,
    UsersModule,
    NewsModule,
    StockSimulatorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
