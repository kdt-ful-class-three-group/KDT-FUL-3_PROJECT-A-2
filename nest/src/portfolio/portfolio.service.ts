import { Injectable } from '@nestjs/common';
import { pool } from '../DB/DB';

export interface Portfolio {
  id: number;
  member_id: number;
  stock_code: string;
  stock_name: string;
  avg_price: number;
  updated_at: string;
}

@Injectable()
export class PortfolioService {
  async findAll(): Promise<any[]> {
    const result = await pool.query('SELECT * FROM portfolio ORDER BY id DESC');
    return result.rows;
  }

  getHello(): string {
    return 'Hello from PortfolioService!';
  }
}
