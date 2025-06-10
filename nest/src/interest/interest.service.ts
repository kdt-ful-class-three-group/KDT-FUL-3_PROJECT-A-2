import { Injectable, Req } from '@nestjs/common';
import { Request } from 'express';
import { pool } from '../DB/DB';

export interface Interest {
  id: number;
  member_id: number;
  stock_code: string;
  stock_name: string;
}

@Injectable()
export class InterestService {
  async getInterestForMemberId(req: Request) {
    console.log(req.session.member_id);
    const sql = 'SELECT * FROM interest_stock WHERE member_id = $1';
    const result = await pool.query(sql, "1");
    console.log(result.rows);
    if (result.rows.length === 0) return false;
    return result.rows;
  }

  async remove(stock_code: string) {
    return pool.query('DELETE FROM interest_stock WHERE stock_code = $1', [stock_code]);
  }

  async create(dto: {
    member_id: number;
    stock_code: string;
    stock_name: string;
  }): Promise<Interest> {
    const result = await pool.query(
      `INSERT INTO interest_stock (member_id, stock_code, stock_name) VALUES ($1, $2, $3) RETURNING *`,
      [dto.member_id ?? null, dto.stock_code, dto.stock_name],
    );
    return result.rows[0];
  }

  getHello(): string {
    return 'Hello from InterestService!';
  }
}
