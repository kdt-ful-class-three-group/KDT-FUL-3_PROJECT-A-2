import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SimulatedStock } from './entities/stocksSimulated.entity';
import { Repository } from 'typeorm';
import { StockApiService } from './apiStocksSimulated.service';

interface StockApiItem {
  bas_dt?: string;
  srtn_cd?: string;
  itms_nm?: string;

  flt_rt?: string;
  trqu?: string;
  tr_prc?: string;
  // 카멜케이스 필드도 추가
  basDt?: string;
  srtnCd?: string;
  itmsNm?: string;
  clpr?: string;
  vs?: string;
  fltRt?: string;
  mkp?: string;
  hipr?: string;
  lopr?: string;
  trQu?: string;
  trPrc?: string;
}

@Injectable()
export class StockSimulatorService implements OnModuleInit {
  constructor(
    private readonly stockApiService: StockApiService,
    @InjectRepository(SimulatedStock)
    private readonly stockRepo: Repository<SimulatedStock>,
  ) {}
  private prevDate: string = '20200108'; // 기본값
  private nextDate: string = '20200109'; // 기본값

  setSimulateDates(prev: string, next: string) {
    this.prevDate = prev;
    this.nextDate = next;
  }

  async onModuleInit() {
    setInterval(() => {
      this.simulateAndSaveStocks(this.prevDate, this.nextDate)
        .then(() => console.log('시뮬레이션 데이터 저장 완료'))
        .catch((e) => console.error('시뮬레이션 에러:', e));
    }, 1000);
  }
  // getPrevDate(): string {
  //   const now = new Date();
  //   now.setDate(now.getDate() - 1);
  //   return now.toISOString().slice(0, 10).replace(/-/g, '');
  // }
  // getNextDate(): string {
  //   const now = new Date();
  //   return now.toISOString().slice(0, 10).replace(/-/g, '');
  // }

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
    const prevStocksRaw = await this.stockApiService.fetchStockData(prevDate);
    const nextStocksRaw = await this.stockApiService.fetchStockData(nextDate);

    // 실제 내려온 날짜 추출
    const prevActualDate =
      prevStocksRaw.length > 0 ? prevStocksRaw[0].basDt : null;
    const nextActualDate =
      nextStocksRaw.length > 0 ? nextStocksRaw[0].basDt : null;

    // 실제 내려온 날짜의 데이터만 사용
    const prevStocks = prevStocksRaw.filter(
      (stock) => stock.basDt === prevActualDate,
    );
    const nextStocks = nextStocksRaw.filter(
      (stock) => stock.basDt === nextActualDate,
    );

    console.log(
      'prevActualDate:',
      prevActualDate,
      'prevStocks 길이:',
      prevStocks.length,
    );
    console.log(
      'nextActualDate:',
      nextActualDate,
      'nextStocks 길이:',
      nextStocks.length,
    );

    const prevMap = new Map<string, StockApiItem>();
    prevStocks.forEach((stock) => {
      const code = stock.srtnCd || stock.srtn_cd;
      if (code) {
        prevMap.set(code, stock);
      }
    });

    const simulatedEntities: SimulatedStock[] = [];

    for (const stock of nextStocks) {
      const srtn_cd = stock.srtnCd || stock.srtn_cd;
      const itms_nm = stock.itmsNm || stock.itms_nm;
      if (!srtn_cd || !itms_nm) {
        console.log('조건 불충족(코드/이름 없음):', stock);
        continue;
      }

      const prev = prevMap.get(srtn_cd);
      if (!prev) {
        console.log('prev 없음:', srtn_cd);
        continue;
      }
      console.log('정상 데이터:', srtn_cd, itms_nm);
      const prevClose = Number(prev.clpr);
      const tick = this.getTickSize(prevClose);

      // 이전 시뮬레이션 값을 DB에서 가져오려면 별도 로직 필요(여기선 생략, 항상 prevClose 기준)
      const basePrice = prevClose;

      const tickCount = Math.floor(Math.random() * 3) + 1; // 1~5 tick
      const direction = Math.random() < 0.5 ? -1 : 1;
      let simulatedPrice =
        tick < 1
          ? Number((basePrice + direction * tick * tickCount).toFixed(2))
          : Number((basePrice + direction * tick * tickCount).toFixed(0));

      const minPrice = Number((prevClose * 0.85).toFixed(2));
      const maxPrice = Number((prevClose * 1.3).toFixed(2));
      if (simulatedPrice < minPrice) simulatedPrice = minPrice;
      if (simulatedPrice > maxPrice) simulatedPrice = maxPrice;

      const simulatedChangeRate = prevClose
        ? Number((((simulatedPrice - prevClose) / prevClose) * 100).toFixed(2))
        : 0;

      const simulatedTradeAmount = Math.floor(
        Number(stock.tr_prc || stock.trPrc || 0) * (0.9 + Math.random() * 0.2),
      );

      // DB 저장용 엔티티 생성
      const entity = this.stockRepo.create({
        bas_dt: nextDate,
        srtn_cd,
        itms_nm,
        clpr: simulatedPrice,
        vs: simulatedPrice - prevClose,
        flt_rt: simulatedChangeRate,
        mkp: stock.mkp ? Number(stock.mkp) : null,
        hipr: stock.hipr ? Number(stock.hipr) : null,
        lopr: stock.lopr ? Number(stock.lopr) : null,
        trqu: stock.trqu ? String(stock.trqu) : null,
        tr_prc: simulatedTradeAmount ? String(simulatedTradeAmount) : null,
      });
      simulatedEntities.push(entity);
    }

    console.log('디비 저장 전 데이터 확인', simulatedEntities);

    if (simulatedEntities.length > 0) {
      await this.stockRepo.save(simulatedEntities);
    }
  }

  async getSimulatedStocks() {
    // return await this.stockRepo.find();
  }
}
