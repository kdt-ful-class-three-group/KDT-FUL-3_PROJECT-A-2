import { Injectable } from '@nestjs/common';
import { pool } from '../DB/DB';
import { CreateOrderDto } from './dto/create-order.dto';

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

  async create(dto: CreateOrderDto): Promise<Order> {
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

  async getStockOrders(dto: { member_id: string, stock_code: string }) {
    const sql = 'SELECT * FROM stock_order WHERE member_id = $1 AND stock_code = $2';
    const result = await pool.query(sql, [dto.member_id, dto.stock_code]);
    return result.rows
  }

  async cancelStockOrder(data: { id: string }) {
    try {
      const sql = "UPDATE stock_order SET status = 'CANCELLED' WHERE id = $1";
      await pool.query(sql, [data.id]);
      return true;
    } catch (error) {
      console.error(error);
      return false
    }
  }

  getHello(): string {
    return 'Hello from OrdersService!';
  }
}
