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
  async findByMemberId(member_id: number) {
    const sql = `
      SELECT
        stock_code,
        stock_name,
        SUM(CASE WHEN order_type = 'BUY' THEN quantity ELSE -quantity END) AS quantity,
        ROUND(AVG(price), 2) AS avg_price
      FROM stock_order
      WHERE member_id = $1
      GROUP BY stock_code, stock_name
      HAVING SUM(CASE WHEN order_type = 'BUY' THEN quantity ELSE -quantity END) > 0
    `;
    const result = await pool.query(sql, [member_id]);
    return result.rows;
  }

  async getTotalQuantity(member_id: number) {
    const sql = `
      SELECT stock_name, max(quantity)
      FROM stock_order 
      WHERE member_id = $1 AND order_type = 'BUY'
      GROUP BY stock_name
    `;
    const result = await pool.query(sql, [member_id]);
    return result.rows;
  }

  getHello(): string {
    return 'Hello from PortfolioService!';
  }
}
