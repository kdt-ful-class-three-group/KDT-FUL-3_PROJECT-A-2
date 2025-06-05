import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SimulatedStock } from './entities/stocksSimulated.entity';
import { StockApiModule } from './apiStocksSimulated.module';
import { StockSimulatorService } from './stocksSimulated.service';
import { StockController } from './stocksSimulated.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SimulatedStock]), StockApiModule],
  providers: [StockSimulatorService],
  controllers: [StockController],
})
export class StockSimulatorModule {}
