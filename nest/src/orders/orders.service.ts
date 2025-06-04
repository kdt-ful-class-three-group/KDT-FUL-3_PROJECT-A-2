import { Injectable } from '@nestjs/common';
import { pool } from '../DB/DB';

export interface Order {
  id: number;
  member_id: number;
  stock_code: string;
  stock_name: string;
  order_type: string; // BUY or SELL
  quantity: number;
  price: number;
  status: string;
  ordered_at: string;
}

@Injectable()
export class OrdersService {
  async findAll(): Promise<Order[]> {
    const result = await pool.query('SELECT * FROM stock_order ORDER BY id DESC');
    return result.rows;
  }

  async create(dto: {
    member_id: number;
    stock_code: string;
    stock_name: string;
    order_type: string;
    quantity: number;
    price: number;
    status: string;
  }): Promise<Order> {
    const result = await pool.query(
      `INSERT INTO stock_order (member_id, stock_code, stock_name, order_type, quantity, price, status, ordered_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, NOW()) RETURNING *`,
      [
        dto.member_id,
        dto.stock_code,
        dto.stock_name,
        dto.order_type,
        dto.quantity,
        dto.price,
        dto.status,
      ],
    );
    return result.rows[0];
  }

  getHello(): string {
    return 'Hello from OrdersService!';
  }
}
