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

  //! 필요핟고 판단하여 만들었지만 사용하지 않고 있다.
  //! 언젠가는 사용할까 싶어 삭제하지는 않았다.
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
