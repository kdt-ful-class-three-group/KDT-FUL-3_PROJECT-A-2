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
    OrdersModule,
    PortfolioModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
