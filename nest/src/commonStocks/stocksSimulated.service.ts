import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SimulatedStock } from './entities/stocksSimulated.entity';
import { Repository } from 'typeorm';
import { StockApiService } from './apiStocksSimulated.service';

interface StockApiItem {
  bas_dt: string;
  srtn_cd: string;
  itms_nm: string;
  clpr: string;
  vs?: string;
  flt_rt?: string;
  mkp?: string;
  hipr?: string;
  lopr?: string;
  trqu?: string;
  tr_prc?: string;
  created_at?: string;
}

@Injectable()
export class StockSimulatorService {
  constructor(
    private readonly stockApiService: StockApiService,
    @InjectRepository(SimulatedStock)
    private readonly stockRepo: Repository<SimulatedStock>,
  ) {}

  getTickSize(price: number): number {
    if (price < 1000) return 1;
    if (price < 5000) return 5;
    if (price < 10000) return 10;
    if (price < 50000) return 50;
    if (price < 100000) return 100;
    if (price < 500000) return 500;
    return 1000;
  }

  async simulateAndSaveStocks(
    prevDate: string,
    nextDate: string,
  ): Promise<void> {
    const prevStocks: StockApiItem[] =
      await this.stockApiService.fetchStockData(prevDate);
    const nextStocks: StockApiItem[] =
      await this.stockApiService.fetchStockData(nextDate);

    const prevMap = new Map(prevStocks.map((stock) => [stock.srtn_cd, stock]));

    const simulatedEntities: SimulatedStock[] = [];

    for (const stock of nextStocks) {
      const prev = prevMap.get(stock.srtn_cd);
      if (!prev) continue;

      const prevClose = Number(prev.clpr);
      const tick = this.getTickSize(prevClose);
      const direction = Math.random() < 0.5 ? -1 : 1;

      let simulatedPrice =
        tick < 1
          ? Number((prevClose + direction * tick).toFixed(2))
          : Number((prevClose + direction * tick).toFixed(0));

      const minPrice = Number((prevClose * 0.85).toFixed(2));
      const maxPrice = Number((prevClose * 1.3).toFixed(2));

      if (simulatedPrice < minPrice) simulatedPrice = minPrice;
      if (simulatedPrice > maxPrice) simulatedPrice = maxPrice;

      const changeRate = prevClose
        ? Number((((simulatedPrice - prevClose) / prevClose) * 100).toFixed(2))
        : 0;

      const tradeAmount = Math.floor(
        Number(stock.tr_prc || 0) * (0.9 + Math.random() * 0.2),
      );

      const entity = this.stockRepo.create({
        bas_dt: nextDate,
        srtn_cd: stock.srtn_cd,
        itms_nm: stock.itms_nm,
        clpr: simulatedPrice,
        vs: simulatedPrice - prevClose,
        flt_rt: changeRate,
        mkp: stock.mkp ? Number(stock.mkp) : null,
        hipr: stock.hipr ? Number(stock.hipr) : null,
        lopr: stock.lopr ? Number(stock.lopr) : null,
        trqu: stock.trqu ? String(stock.trqu) : null, // ← string 변환!
        tr_prc: tradeAmount ? String(tradeAmount) : null, // ← string 변환!
        // created_at은 DB에서 자동 생성
      });

      simulatedEntities.push(entity);
    }

    await this.stockRepo.save(simulatedEntities);
  }
}
