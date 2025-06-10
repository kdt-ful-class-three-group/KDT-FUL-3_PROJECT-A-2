import { Controller, Get } from '@nestjs/common';
import { StockSimulatorService } from './stocksSimulated.service';

@Controller('stock')
export class StockController {
  constructor(private readonly stockSimulatorService: StockSimulatorService) {}

  // @Post('simulate')
  // async simulateStocks(@Body() body: { prevDate: string; nextDate: string }) {
  //   const { prevDate, nextDate } = body;
  //   await this.stockSimulatorService.simulateAndSaveStocks(prevDate, nextDate);
  //   return { message: '시뮬레이션 완료' };
  // }

  @Get('simulated')
  async getSimulatedStocks() {
    return await this.stockSimulatorService.getSimulatedStocks();
  }
}
