import { Injectable } from '@nestjs/common';
import { pool } from 'src/DB/DB';

@Injectable()
export class BankService {
  getHello(): string {
    return 'Hello from BankService!';
  }

  async createBankAccount(member: { pk: string }) {
    const sql = 'INSERT INTO bank (member_id) VALUES ($1)';
    try {
      await pool.query(sql, [member.pk]);
      return true;
    } catch (error) {
      console.error('bank 테이블 에러:', error);
      return false;
    }
  }

  async findAll() {
    const result = await pool.query('SELECT * FROM bank ORDER BY id DESC');
    return result.rows;
  }

  async getPersonalBank(member_id: string) {
    try {
      const sql = "SELECT * FROM bank WHERE member_id = $1";
      const result = await pool.query(sql, [member_id]);
      if (result.rows.length === 0) return []
      return result.rows[0];
    } catch (error) {
      console.error(error);
    }
  }
}
