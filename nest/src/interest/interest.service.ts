import { Injectable } from '@nestjs/common';
import { pool } from '../DB/DB';

export interface Interest {
  id: number;
  member_id: number;
  stock_code: string;
  stock_name: string;
}

@Injectable()
export class InterestService {
  async findAll(): Promise<Interest[]> {
    const result = await pool.query('SELECT * FROM interest_stock ORDER BY id ASC');
    return result.rows;
  }

  async create(dto: {
    member_id: number;
    stock_code: string;
    stock_name: string;
  }): Promise<Interest> {
    const result = await pool.query(
      `INSERT INTO interest_stock (member_id, stock_code, stock_name) VALUES ($1, $2, $3) RETURNING *`,
      [dto.member_id, dto.stock_code, dto.stock_name],
    );
    return result.rows[0];
  }

  getHello(): string {
    return 'Hello from InterestService!';
  }
}
