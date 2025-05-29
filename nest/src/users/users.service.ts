import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { SigninDto } from './dto/signin.dto';
import { pool } from 'src/DB/DB';
import * as bcrypt from "bcryptjs";

@Injectable()
export class UsersService {
  getHello(): string {
    return 'Hello from UsersService!';
  }

  async checkId(id: string): Promise<{ exists: boolean }> {
    const sql = "SELECT * FROM member WHERE user_id = $1";
    try {
      const result = await pool.query(sql, [id]);
      return { exists: result.rows.length > 0 };
    } catch (error) {
      throw error;
    }
  }


  async checkNick(nickname: string): Promise<{ exists: boolean }> {
    const sql = "SELECT * FROM member WHERE nickname = $1";
    try {
      const result = await pool.query(sql, [nickname]);
      return { exists: result.rows.length > 0 };
    } catch (error) {
      throw error;
    }
  }

  async setUsers(userData: CreateUserDto): Promise<boolean> {
    const sql = 'INSERT INTO member (user_id, password, phone_number, nickname) VALUES ($1, $2, $3, $4)';
    const hash = await bcrypt.genSalt(10);
    userData.password = await bcrypt.hash(userData.password, hash);

    try {
      await pool.query(sql, [userData.userid, userData.password, userData.phone, userData.nickname]);
      return true;
    } catch (error) {
      console.error('회원가입 에러:', error);
      return false;
    }
  }

  async checkUser(data: SigninDto): Promise<boolean> {
    const sql = "SELECT * FROM member WHERE user_id = $1";
    const result = await pool.query(sql, [data.userid]);

    if (result.rows.length === 0) return false;
    const user = result.rows[0];
    const isMatch = await bcrypt.compare(data.password, user.password);

    return isMatch;
  }
}
