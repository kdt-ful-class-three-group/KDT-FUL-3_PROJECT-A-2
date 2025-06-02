import { Injectable } from '@nestjs/common';
import { CreateBankDto } from './dto/create-bank.dto';
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
      console.log("bank 테이블 저장");
      return true;
    } catch (error) {
      console.error('bank 테이블 에러:', error);
      return false;
    }
  }
}