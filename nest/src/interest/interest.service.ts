import { Injectable } from '@nestjs/common';
import { pool } from '../DB/DB';

export interface Interest {
  id: number;
  user_id: number;
  stock_code: string;
  stock_name: string;
  added_at: string;
}

@Injectable()
export class InterestService {
  async findAll(): Promise<Interest[]> {
    const result = await pool.query('SELECT * FROM interest_stock ORDER BY id ASC');
    return result.rows;
  }

  async create(dto: {
    user_id: number;
    stock_code: string;
    stock_name: string;
    added_at: string;
  }): Promise<Interest> {
    const result = await pool.query(
      'INSERT INTO words (word, meaning) VALUES ($1, $2) RETURNING *',
      [dto.user_id, dto.stock_code, dto.stock_name, dto.added_at],
    );
    return result.rows[0];
  }

  getHello(): string {
    return 'Hello from InterestService!';
  }
}
